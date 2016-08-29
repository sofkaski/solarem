/**
 * Relay.js
 *
 * @description :: Represents a relay and it's state.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    state: {
      type: 'string',
      enum: ['on', 'off'],
      defaultsTo: 'off'
    }
  }
};

