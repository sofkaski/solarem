module.exports = function(RED) {

  var PowerState = {
         UNDER_LIMIT: {fill:"green",shape:"dot",text:""},
         OVER_LIMIT: {fill:"red",shape:"dot",text:""},
         BETWEEN_LIMITS: {fill:"yellow",shape:"dot",text:""}
  };
  var RelayState = {
        UNDEFINED: -1,
        ON: 0,
        OFF: 1
  };

  function State(ranges) {
    this.ranges = ranges;
  }
  function Range(rangeName, powerStates) {
    this.rangeName = rangeName;
    this.powerStates = powerStates;
  }
  function PwrState(state, relayStates) {
    this.state = state;
    this.relayStates = relayStates;
  }
  function RelayStatus(relayState, newRelayStates) {
    this.relayState = relayState;
    this.newRelayStates = newRelayStates;
  }

  var state = new State(
    [new Range("below",
      [new PwrState(PowerState.UNDER_LIMIT,
        [new RelayStatus(RelayState.UNDEFINED,RelayStatus.ON),
         new RelayStatus(RelayState.OFF,RelayState.ON)]
        )],
      [new PwrState(PowerState.BETWEEN_LIMITS,
        [new RelayStatus(RelayState.UNDEFINED,RelayState.OFF),
         new RelayStatus(RelayState.ON,RelayState.OFF)]
        )],
      [new PwrState(PowerState.OVER_LIMIT,
        [new RelayStatus(RelayState.UNDEFINED,RelayState.OFF),
         new RelayStatus(RelayState.ON,RelayState.OFF)]
        )]),
      new Range("over",
        [new PwrState(PowerState.UNDER_LIMIT,
          [new RelayStatus(RelayState.UNDEFINED,RelayState.OFF),
           new RelayStatus(RelayState.ON,RelayState.OFF)]
        )],
        [new PwrState(PowerState.BETWEEN_LIMITS,
          [new RelayStatus(RelayState.UNDEFINED,RelayState.OFF),
           new RelayStatus(RelayState.ON,RelayState.OFF)]
        )],
        [new PwrState(PowerState.OVER_LIMIT,
          [new RelayStatus(RelayState.UNDEFINED,RelayState.ON),
           new RelayStatus(RelayState.OFF,RelayState.ON)]
        )]),
        new Range("in",
          [new PwrState(PowerState.UNDER_LIMIT,
            [new RelayStatus(RelayState.UNDEFINED,RelayState.OFF),
             new RelayStatus(RelayState.ON,RelayState.OFF)]
          )],
          [new PwrState(PowerState.BETWEEN_LIMITS,
            [new RelayStatus(RelayState.UNDEFINED,RelayState.ON),
             new RelayStatus(RelayState.OFF,RelayState.ON)]
          )],
          [new PwrState(PowerState.OVER_LIMIT,
            [new RelayStatus(RelayState.UNDEFINED,RelayState.OFF),
             new RelayStatus(RelayState.ON,RelayState.OFF)]
          )]),
          new Range("out",
            [new PwrState(PowerState.UNDER_LIMIT,
              [new RelayStatus(RelayState.UNDEFINED,RelayState.ON),
               new RelayStatus(RelayState.OFF,RelayState.ON)]
            )],
            [new PwrState(PowerState.BETWEEN_LIMITS,
              [new RelayStatus(RelayState.UNDEFINED,RelayState.OFF),
               new RelayStatus(RelayState.ON,RelayState.OFF)]
            )],
            [new PwrState(PowerState.OVER_LIMIT,
              [new RelayStatus(RelayState.UNDEFINED,RelayState.ON),
               new RelayStatus(RelayState.OFF,RelayState.ON)]
            )])]);


  function powerLimitNode(config) {
      var log = RED.log;
      var vsprintf = require("sprintf-js").vsprintf;

      RED.nodes.createNode(this,config);
      this.name = config.name;
      this.lower_limit = parseInt(config.lower_limit);
      this.upper_limit = parseInt(config.upper_limit);
      this.range = config.range;
      log.info("Created power limit node " + this.name + " successfully.");


      this.on('input', function(msg) {
          if (msg.topic.indexOf("Power") >= 0) {
            var REGISTER = global.get('epr04sregisters').REGISTER;
            var newState = RelayState.UNDEFINED;
            var powerState = PowerState.UNDER_LIMIT;
            var power = parseFloat(msg.payload);
            if (power < this.lower_limit) {
              powerState = PowerState.UNDER_LIMIT;
              powerState.text = power.toString() + " < " + this.lower_limit.toString();
              newState = newRelayState(powerState, range);
            }
            else if (power > this.upper_limit) {
              powerState = PowerState.OVER_LIMIT;
              powerState.text = power.toString() + " > " + this.upper_limit.toString();
              newState = newRelayState(powerState, range);
            }
            else {
              powerState = PowerState.BETWEEN_LIMITS;
              powerState.text = this.lower_limit.toString() + " <= " + power.toString() + " < " + this.upper_limit.toString();
              newState = newRelayState(powerState, range);
            }

            node.status(powerState);

            if (newState !== RelayState.UNDEFINED) {
              this.context().set('relayState', newState);
              msg.topic = "powerLimit";
              msg.payload = newState;
              return [msg];
            }
            else {
              return null;
            }
          }
          else {
              log.warn('Unknown input message received with topic "' + msg.topic +'"');
              return msg;
          }
      });

    function newRelayState(powerState, range) {
      var relayState = this.context().get('relayState') || RelayState.UNDEFINED;
      var newState = RelayState.UNDEFINED;
      if (range in states) {
        if (powerState in states[range]) {
          if (relayState in states[range][powerState]) {
            newState = states[range][powerState][relayState];
          }
        }
      }
    }
  }
  RED.nodes.registerType("power-limit",powerLimitNode);
};
