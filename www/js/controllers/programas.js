angular.module('starter.controllers')

.controller('ProgramasController', ['$scope', 'getService', 'ApiEndpoint', function($scope, getService, ApiEndpoint) {
  var httpCall = function(uri, parameters, selectOptions, idValue, nameValue) {
    getService
      .getData(uri, parameters)
      .success(function(response) {
        selectOptions.length = 0;
        angular.forEach(response.data, function(value, key) {
          selectOptions.push({id: value[idValue], name: value[nameValue]});
        });
      });
  };
  var selectConstructor = function (names) {
    angular.forEach(names, function(name, key) {
      $scope[name] = {
        repeatSelect: null,
        availableOptions: [],
      };
    });
  };

  $scope.showButton = false;
  $scope.SelectedPerfiles = null;
  selectConstructor(["sede", "facultad", "programa"]);

  httpCall("/api_sedes", null, $scope.sede.availableOptions, "sede_id", "sede");

  /* Watchers */
  $scope.$watch('[sede.repeatSelect, facultad.repeatSelect, programa.repeatSelect]', function (newValue, oldValue) {
    if (newValue[0] !== oldValue[0]) {
      httpCall("/api_facultades", {sede_id: $scope.sede.repeatSelect}, $scope.facultad.availableOptions, "facultad_id", "facultad");
    }

    if (newValue[1] !== oldValue[1]) {
      httpCall("/api_programas",  {facultad_id: $scope.facultad.repeatSelect}, $scope.programa.availableOptions, "id", "programa");
    }

    if (newValue[2] !== oldValue[2]) {
       $scope.showButton = true;
    }
  }, true);

}]);
