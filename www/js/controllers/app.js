angular.module('starter.controllers', [])

.constant('ApiEndpoint', {
  //url: 'http://retalapp.com/rutas' //Deploy app to mobile
  url: 'api' //Ionic serve to test real api rest
  //url: '' // gulp serve to run Mock data
})

.controller('AppController', ['$scope', function($scope) {

}]);
