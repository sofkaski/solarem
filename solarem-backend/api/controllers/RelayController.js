/**
 * RelayController
 *
 * @description :: Server-side logic for managing relays
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `RelayController.create()`
   */
  create: function (req, res) {
	Relay.create({name:req.body.name}).exec(function (err, relay){
  		if (err) { return res.serverError(err); }
  		sails.log('Relay id:', relay.id);
       return res.ok();
    });
  },

  /**
   * `RelayController.update()`
   */
  update: function (req, res) {
	if (!req.params.id) {
		return res.badRequest('No id in update request.');	
	}
	Relay.update({id: req.params.id}, req.body).exec(function(err, updatedRelay){
		if (err) {
			return res.serverError(err);
		}
		if (updatedRelay.length > 0) {
			sails.log('Updated relay:', updatedRelay[0]);
			return res.ok(updatedRelay[0]);		
		} else {
			return res.notFound('Relay for id '+req.params.id+' was not found');
		}
	});
  },


  /**
   * `RelayController.destroy()`
   */
  destroy: function (req, res) {
	if (!req.params.id) {
		return res.badRequest('No id in delete request.');	
	}
	Relay.destroy({id: req.params.id}).exec(function(err){
		if (err) {
			return res.serverError(err);
		}
		return res.ok();
  	});
  },


  /**
   * `RelayController.find()`
   */
  find: function (req, res) {
	Relay.find().exec(function(err, relays){
		if (err) {
			return res.serverError(err);
		}
		return res.json(relays);		
	});
  },

	
  /**
   * `RelayController.findOne()`
   */
  findOne: function (req, res) {
	if (req.id) {
	  Relay.find({id: req.id}).exec(function(err, relay){
		if (err) {
			return res.serverError(err);
		}
		return res.json(relay);		
		});
	}
	return res.badRequest('No id parameter in the query');
  }
};

