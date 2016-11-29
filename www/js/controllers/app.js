angular.module('starter.controllers', [])

.constant('ApiEndpoint', {
  url: 'http://www.pregrado.unal.edu.co/rutas/admin', //Deploy app to mobile
  //url: 'api', //Ionic serve to test real api rest
  //url: '', // gulp serve to run Mock data
  client_id: "android",
  client_secret: "RN0NhUJOHqh55OrEjMd8RkBhsZPdteeB"
})

.controller('AppController', ['$scope', function($scope) {

}]);
