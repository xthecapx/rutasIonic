angular.module('starter.controllers')

.controller('RutasController', ['$scope', '$http', '$location', 'sedesService', 'facultadService', function($scope, $http, $location, sedesService, facultadService) {

  $scope.sede = {
    repeatSelect: null,
    availableOptions: [],
  };

  $scope.facultad = {
    repeatSelect: null,
    availableOptions: [],
  };

  $scope.programa = {
    repeatSelect: null,
    availableOptions: []
  };

  $scope.showButton = false;

  $scope.SelectedPerfiles = null;

  sedesService.promise.success(function(response) {
    angular.forEach(response.data, function(value, key) {
      this.sede.availableOptions.push({id: value.sede_id, name: value.sede});
    }.bind($scope));
  });

  $scope.$watch('[sede.repeatSelect, facultad.repeatSelect, programa.repeatSelect]', function (newValue, oldValue) {
    if (newValue[0] !== oldValue[0]) {
      $http({
        url: "./api/api_facultades",
        method: "GET",
        params: {sede_id: $scope.sede.repeatSelect}
      }).success(function(response) {
        $scope.facultad.availableOptions.length = 0;
        angular.forEach(response.data, function(value, key) {
          this.facultad.availableOptions.push({id: value.facultad_id, name: value.facultad});
        }.bind($scope));
      });
    }

    if (newValue[1] !== oldValue[1]) {
      $http({
        url: "./api/api_programas",
        method: "GET",
        params: {facultad_id: $scope.facultad.repeatSelect}
      }).success(function(response) {
        $scope.programa.availableOptions.length = 0;
        angular.forEach(response.data, function(value, key) {
          this.programa.availableOptions.push({id: value.id, name: value.programa});
        }.bind($scope));
      });
    }

    if (newValue[2] !== oldValue[2]) {
       $scope.showButton = true;
    }
    
  }, true);

}]);
