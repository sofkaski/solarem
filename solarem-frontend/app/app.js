'use strict';

// Declare app level module which depends on views, and components
angular.module('solaremFE', [
  'ngRoute',
  'solaremFE.relayStateView',
  'solaremFE.view2',
  'solaremFE.version',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/relayStateView'});
}]);
