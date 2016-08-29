'use strict';

angular.module('solaremFE.relayStateView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/relayStateView', {
    templateUrl: 'relayStateView/relayStateView.html',
    controller: 'relayStateViewCtrl'
  });
}])

.controller('relayStateViewCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.updateModel = function() {
    $http.get('http://localhost:1337/relay').
      then(function(resp){
        $scope.relays =  resp.data;
		  })
    }}]);
 