angular.module('starter.controllers', [])

.constant('ApiEndpoint', {
  //url: 'http://retalapp.com/rutas', //Deploy app to mobile
  //url: 'api', //Ionic serve to test real api rest
  url: '', // gulp serve to run Mock data
  client_id: "android",
  client_secret: "O20wgetsGF82eFTwTVA2qWFAcxGhiq0x"
})

.controller('AppController', ['$scope', function($scope) {

}]);
