angular.module('starter.controllers')

.controller('ProgramasController', ['$scope', 'getService', 'ApiEndpoint', function($scope, getService, ApiEndpoint) {
  var httpCall = function(call) {
    this._call = call;
    this._scope = $scope;
    var _call = this._call;
    var _scope = this._scope;

    /* Http Callbacks*/
    var successCallback = function(response) {
      _call.selectOptions.length = 0;
      angular.forEach(response.data.data, function(value, key) {
        _call.selectOptions.push({
          id: value[_call.idValue],
          name: value[_call.nameValue]
        });
      });

      if (_call.nameValue === "facultad") {
        _scope.loader.facultad = false;
        _scope.disable.facultad = true;
      }

      if (_call.nameValue === "programa") {
        _scope.loader.programa = false;
        _scope.disable.programa = true;
      }
    };

    var errorCallback = function(error) {
      console.log(error);
    };

    getService
      .getData(_call.uri, _call.parameters)
      .then(successCallback, errorCallback);
  };

  var selectConstructor = function (names) {
    angular.forEach(names, function(name, key) {
      $scope[name] = {
        repeatSelect: null,
        availableOptions: [],
      };
    });
  };

  $scope.disable = {
    button: false,
    facultad: false,
    programa: false
  };

  $scope.loader = {
    facultad: false,
    programa: false
  };

  $scope.SelectedPerfiles = null;
  selectConstructor(["sede", "facultad", "programa"]);

  httpCall({
    uri: "/api_sedes",
    parameters: null,
    selectOptions: $scope.sede.availableOptions,
    idValue: "sede_id",
    nameValue: "sede"
  });

  /* Watchers */
  $scope.$watch('[sede.repeatSelect, facultad.repeatSelect, programa.repeatSelect]', function (newValue, oldValue) {
    if (newValue[0] !== oldValue[0]) {
      $scope.loader.facultad = true;
      $scope.disable.facultad = false;
      httpCall({
        uri: "/api_facultades",
        parameters: {sede_id: $scope.sede.repeatSelect},
        selectOptions: $scope.facultad.availableOptions,
        idValue: "facultad_id",
        nameValue: "facultad",
      });

    }

    if (newValue[1] !== oldValue[1]) {
      $scope.loader.programa = true;
      $scope.disable.programa = false;
      httpCall({
        uri: "/api_programas",
        parameters: {facultad_id: $scope.facultad.repeatSelect},
        selectOptions: $scope.programa.availableOptions,
        idValue: "id",
        nameValue: "programa"
      });
    }

    if (newValue[2] !== oldValue[2]) {
       $scope.disable.button = true;
    }
  }, true);

}]);
