angular.module('starter.controllers')

.controller('RutasController', ['$scope', '$http', function($scope, $http) {
  $scope.sede = {
    repeatSelect: null,
    availableOptions: [
      {id: '1', name: 'Sede 1'},
      {id: '2', name: 'Sede B'},
      {id: '3', name: 'Sede C'}
    ],
  };
  $scope.programa = {
    repeatSelect: null,
    availableOptions: [
      {id: '1', name: 'Programa A'},
      {id: '2', name: 'Programa B'},
      {id: '3', name: 'Programa C'}
    ],
  };
  $scope.facultad = {
    repeatSelect: null,
    availableOptions: [
      {id: '1', name: 'Facultad A'},
      {id: '2', name: 'Facultad B'},
      {id: '3', name: 'Facultad C'}
    ],
  };

}]);
