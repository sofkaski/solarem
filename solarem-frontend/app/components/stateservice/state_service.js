'use strict';

angular.module('solaremFE.stateService', [
  '$http'
])
.service('stateService', function($http){
  return {
    'getRelays': function($http) {
        return $http.get('http://localhost:1337/relay').then(function(resp){
        	return resp.data;
		    }
	    )}
  }});