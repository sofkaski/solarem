/*jshint esversion: 6 */

module.exports = function(RED) {
    // Power status constants
    // const PS_UNDEFINED = -1;
    const PS_UNDER_LIMIT = 1;
    const PS_OVER_LIMIT = 2;
    const PS_BETWEEN_LIMITS = 3;
    // Relay status constants
    const RS_UNDEFINED = -1;
    const RS_ON = 0;
    const RS_OFF = 1;
    // Operation modes
    const OPERATION_UNDEFINED = 0;
    const OPERATION_MANUAL = 1;
    const OPERATION_AUTO = 2;

    var RelayStatus = {
        OFF: {
            fill: 'green',
            shape: 'dot',
            text: ''
        },
        ON: {
            fill: 'red',
            shape: 'dot',
            text: ''
        },
        UNDEFINED: {
            fill: 'yellow',
            shape: 'ring',
            text: ''
        }
    };

    // Table to define new state of relay based on defined range type,
    // power state and relay current state. Only changing states are listed.
    var states = {
        'below': {
            [PS_UNDER_LIMIT]: {
                [RS_UNDEFINED]: RS_ON, [RS_OFF]: RS_ON
            }, [PS_BETWEEN_LIMITS]: {
                [RS_UNDEFINED]: RS_OFF, [RS_ON]: RS_OFF
            }, [PS_OVER_LIMIT]: {
                [RS_UNDEFINED]: RS_OFF, [RS_ON]: RS_OFF
            }
        },
        'above': {
            [PS_UNDER_LIMIT]: {
                [RS_UNDEFINED]: RS_OFF, [RS_ON]: RS_OFF
            }, [PS_BETWEEN_LIMITS]: {
                [RS_UNDEFINED]: RS_OFF, [RS_ON]: RS_OFF
            }, [PS_OVER_LIMIT]: {
                [RS_UNDEFINED]: RS_ON, [RS_OFF]: RS_ON
            }
        },
        'in': {
            [PS_UNDER_LIMIT]: {
                [RS_UNDEFINED]: RS_OFF, [RS_ON]: RS_OFF
            }, [PS_BETWEEN_LIMITS]: {
                [RS_UNDEFINED]: RS_ON, [RS_OFF]: RS_ON
            }, [PS_OVER_LIMIT]: {
                [RS_UNDEFINED]: RS_OFF, [RS_ON]: RS_OFF
            }
        },
        'out': {
            [PS_UNDER_LIMIT]: {
                [RS_UNDEFINED]: RS_ON, [RS_OFF]: RS_ON
            }, [PS_BETWEEN_LIMITS]: {
                [RS_UNDEFINED]: RS_OFF, [RS_ON]: RS_OFF
            }, [PS_OVER_LIMIT]: {
                [RS_UNDEFINED]: RS_ON, [RS_OFF]: RS_ON
            },
        }
    };


    function powerLimitNode(config) {
        var log = RED.log;

        RED.nodes.createNode(this, config);
        this.name = config.name;
        this.lower_limit = parseInt(config.lower_limit);
        this.upper_limit = parseInt(config.upper_limit);
        this.range = config.range.toLowerCase();
        this.initial_mode = config.initial_mode.toLowerCase();
        var node = this;
        var limitText = 'Criteria: ';
        // var modeText = "";
        switch (this.range) {
        case 'in':
            limitText += 'inside range [' + this.lower_limit + '-' + this.upper_limit + ']';
            break;
        case 'out':
            limitText += 'outside range (' + this.lower_limit + '-' + this.upper_limit + ')';
            break;
        case 'above':
            limitText += 'above ' + this.upper_limit;
            break;
        case 'below':
            limitText += 'below ' + this.lower_limit;
            break;
        }
        this.context().set('LimitText', limitText);

        switch (this.initial_mode) {
        case 'manual':
            this.context().set('OperationMode', OPERATION_MANUAL);
            break;
        case 'auto':
            this.context().set('OperationMode', OPERATION_AUTO);
            break;
        }
        this.context().set('relayState', RS_UNDEFINED);
        setNodeStatus(this, '-');

        this.on('input', function(msg) {
            var operationMode = node.context().get('OperationMode') || OPERATION_AUTO;
            var newState = RS_UNDEFINED;
            if (msg.topic.indexOf('Power') >= 0) {
                var power = parseFloat(msg.payload);
                if (operationMode === OPERATION_AUTO) {
                    if (power < node.lower_limit) {
                        newState = newRelayState(PS_UNDER_LIMIT, node);
                    } else if (power > node.upper_limit) {
                        newState = newRelayState(PS_OVER_LIMIT, node);
                    } else {
                        newState = newRelayState(PS_BETWEEN_LIMITS, node);
                    }

                    if (newState !== RS_UNDEFINED) {
                        node.context().set('relayState', newState);
                        setNodeStatus(node, power);
                        msg.topic = 'RelayControl';
                        msg.payload = newState;
                        node.send(msg);
                    } else {
                        // no change in state
                        setNodeStatus(node, power);
                        return null;
                    }
                } else {
                    return null;
                }
            } else if (msg.topic.indexOf('Mode') >= 0) {
                switch (msg.payload.toLowerCase()) {
                case 'manual':
                    node.context().set('OperationMode', OPERATION_MANUAL);
                    break;
                case 'auto':
                    node.context().set('OperationMode', OPERATION_AUTO);
                    break;
                }
                setNodeStatus(node, '-');
                return null;

            } else if (msg.topic.indexOf('ManualControl') >= 0) {
                if (operationMode === OPERATION_MANUAL) {
                    newState = RS_UNDEFINED;
                    switch (msg.payload) {
                    case 'on':
                        newState = RS_ON;
                        break;
                    case 'off':
                        newState = RS_OFF;
                        break;
                    }
                    var currentState = node.context().get('relayState');
                    if (currentState !== newState) {
                        node.context().set('relayState', newState);
                        setNodeStatus(node, '-');
                        msg.topic = 'RelayControl';
                        msg.payload = newState;
                        node.send(msg);
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            } else {
                log.warn('Unknown input message received with topic "' + msg.topic + '": ' + msg.payload);
                return null;
            }
        });

        this.on('close', function() {
            node.context().set('relayState', RS_UNDEFINED);
            node.context().set('OperationMode', OPERATION_UNDEFINED);
        });
    }
    RED.nodes.registerType('power-limit', powerLimitNode);

    function newRelayState(powerState, node) {
        var relayState = node.context().get('relayState') || RS_UNDEFINED;
        var newState = RS_UNDEFINED;
        if (node.range in states) {
            if (powerState in states[node.range]) {
                if (relayState in states[node.range][powerState]) {
                    newState = states[node.range][powerState][relayState];
                }
            }
        }
        return newState;
    }

    function setNodeStatus(node, power) {
        var state = node.context().get('relayState');
        var operationMode = node.context().get('OperationMode') || OPERATION_UNDEFINED;
        var limitText = node.context().get('LimitText') || 'Criteria: ?';
        var rStatus = {};
        switch (state) {
        case RS_ON:
            rStatus = RelayStatus.ON;
            break;
        case RS_OFF:
            rStatus = RelayStatus.OFF;
            break;
        case RS_UNDEFINED:
            rStatus = RelayStatus.UNDEFINED;
            break;
        }
        var modeText = 'Mode: ?';
        switch (operationMode) {
        case OPERATION_MANUAL:
            modeText = 'Mode: manual';
            break;
        case OPERATION_AUTO:
            modeText = 'Mode: auto';
            break;
        case RS_UNDEFINED:
            break;
        }
        rStatus.text = limitText + ' ' + modeText + '. Power: ' + power;
        node.status(rStatus);
    }

};
