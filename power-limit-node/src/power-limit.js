/*jshint esversion: 6 */

module.exports = function(RED) {
  // Power status constants
  const PS_UNDER_LIMIT = -1;
  const PS_OVER_LIMIT = 1;
  const PS_BETWEEN_LIMITS = 0;
  // Relay status constants
  const RS_UNDEFINED = -1;
  const RS_ON = 0;
  const RS_OFF = 1;

  var PowerStatus = {
         UNDER_LIMIT: {fill:"green",shape:"dot",text:""},
         OVER_LIMIT: {fill:"red",shape:"dot",text:""},
         BETWEEN_LIMITS: {fill:"yellow",shape:"dot",text:""}
  };


// Table to define new state of relay based on defined range type,
// power state and relay current state. Only changing states are listed.
  var states = {
    "below":{
      [PS_UNDER_LIMIT]: {
        [RS_UNDEFINED]: RS_ON,
        [RS_OFF]: RS_ON
      },
      [PS_BETWEEN_LIMITS]: {
        [RS_UNDEFINED]: RS_OFF,
        [RS_ON]: RS_OFF
      },
      [PS_OVER_LIMIT]: {
        [RS_UNDEFINED]: RS_OFF,
        [RS_ON]: RS_OFF
      }
    },
    "over":{
      [PS_UNDER_LIMIT]: {
        [RS_UNDEFINED]: RS_OFF,
        [RS_ON]: RS_OFF
      },
      [PS_BETWEEN_LIMITS]: {
        [RS_UNDEFINED]: RS_OFF,
        [RS_ON]: RS_OFF
      },
      [PS_OVER_LIMIT]: {
        [RS_UNDEFINED]: RS_ON,
        [RS_OFF]: RS_ON
      }
    },
    "in":{
      [PS_UNDER_LIMIT]: {
        [RS_UNDEFINED]: RS_OFF,
        [RS_ON]: RS_OFF
      },
      [PS_BETWEEN_LIMITS]: {
        [RS_UNDEFINED]: RS_ON,
        [RS_OFF]: RS_ON
      },
      [PS_OVER_LIMIT]: {
        [RS_UNDEFINED]: RS_OFF,
        [RS_ON]: RS_OFF
      }
    },
    "out":{
      [PS_UNDER_LIMIT]: {
        [RS_UNDEFINED]: RS_ON,
        [RS_OFF]: RS_ON
      },
      [PS_BETWEEN_LIMITS]: {
        [RS_UNDEFINED]: RS_OFF,
        [RS_ON]: RS_OFF
      },
      [PS_OVER_LIMIT]: {
        [RS_UNDEFINED]: RS_ON,
        [RS_OFF]: RS_ON
      },
    }
  };


  function powerLimitNode(config) {
      var log = RED.log;

      RED.nodes.createNode(this,config);
      this.name = config.name;
      this.lower_limit = parseInt(config.lower_limit);
      this.upper_limit = parseInt(config.upper_limit);
      this.range = config.range;
      var node = this;
      log.info("Created power limit node " + this.name + " successfully.");


      this.on('input', function(msg) {
          log.info('topic: ' + msg.topic);

          if (msg.topic.indexOf("Power") >= 0) {
            var newState = RS_UNDEFINED;
            var powerState = PS_UNDER_LIMIT;
            var powerStatus = PowerStatus.UNDER_LIMIT;
            var power = parseFloat(msg.payload);
            if (power < node.lower_limit) {
              powerState = PS_UNDER_LIMIT;
              powerStatus = PowerStatus.UNDER_LIMIT;
              powerStatus.text = power.toString() + " < " + node.lower_limit.toString();
              newState = newRelayState(powerState, node);
            }
            else if (power > this.upper_limit) {
              powerState = PS_OVER_LIMIT;
              powerStatus = PowerStatus.OVER_LIMIT;
              powerStatus.text = power.toString() + " > " + node.upper_limit.toString();
              newState = newRelayState(powerState, node);
            }
            else {
              powerState = PS_BETWEEN_LIMITS;
              powerStatus = PowerStatus.BETWEEN_LIMITS;
              powerStatus.text = node.lower_limit.toString() + " <= " + power.toString() + " < " + node.upper_limit.toString();
              newState = newRelayState(powerState, node);
            }
            log.info('newState: ' + newState);
            node.status(powerStatus);

            if (newState !== RS_UNDEFINED) {
              log.info('setting new state for relay');
              node.context().set('relayState', newState);
              msg.topic = "powerLimit";
              msg.payload = newState;
              node.send([msg]);
            }
            else {
              log.info('No change');
              return null;
            }
          }
          else {
              log.warn('Unknown input message received with topic "' + msg.topic +'"');
              return msg;
          }
      });

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
  }
  RED.nodes.registerType("power-limit",powerLimitNode);
};
