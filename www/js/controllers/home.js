angular.module('starter.controllers')

.controller('HomeController', ['$scope', '$ionicHistory', function($scope, $ionicHistory) {
  $ionicHistory.clearHistory();
}]);
