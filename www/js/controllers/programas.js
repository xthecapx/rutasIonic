angular.module('starter.controllers')

.controller('ProgramasController', ['$scope', 'getService', 'ApiEndpoint', function($scope, getService, ApiEndpoint) {
  var httpCall = function(call) {
    this._call = call;
    this._scope = $scope;
    var _self = this;

    var _success = function(response) {
      var _call = _self._call;
      var _scope = _self._scope;

      _call.selectOptions.length = 0;

      if (_call.nameValue === "facultad") {
        _scope._selectFacultad.hide();
      }

      if (_call.nameValue === "programa") {
        _scope._selectPrograma.hide();
      }

      angular.forEach(response.data.data, function(value, key) {
        _call.selectOptions.push({
          id: value[_call.idValue],
          name: value[_call.nameValue]
        });
      });
    };

    var _error = function(error) {
      console.log(error);
    };

    getService
      .getData(_self._call.uri, _self._call.parameters)
      .then(_success, _error);
  };

  var selectConstructor = function (names) {
    angular.forEach(names, function(name, key) {
      $scope[name] = {
        repeatSelect: null,
        availableOptions: [],
      };
    });
  };

  $scope._selectFacultad = {
    show: function() {
      $scope.loader.facultad = true;
      $scope.disable.facultad = false;
      $scope.disable.programa = false;
    },
    hide: function() {
      $scope.loader.facultad = false;
      $scope.disable.facultad = true;
    }
  };

  $scope._selectPrograma = {
    show: function() {
      $scope.loader.programa = true;
      $scope.disable.programa = false;
    },
    hide: function() {
      $scope.loader.programa = false;
      $scope.disable.programa = true;
    }
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
    uri: "/rutas/api_sedes",
    parameters: null,
    selectOptions: $scope.sede.availableOptions,
    idValue: "sede_id",
    nameValue: "sede"
  });

  /* Watchers */
  $scope.$watch('[sede.repeatSelect, facultad.repeatSelect, programa.repeatSelect]', function (newValue, oldValue) {
    if (newValue[0] !== oldValue[0]) {
      $scope._selectFacultad.show();
      httpCall({
        uri: "/rutas/api_facultades",
        parameters: {sede_id: $scope.sede.repeatSelect},
        selectOptions: $scope.facultad.availableOptions,
        idValue: "facultad_id",
        nameValue: "facultad",
      });

    }

    if (newValue[1] !== oldValue[1]) {
      $scope._selectPrograma.show();
      httpCall({
        uri: "/rutas/api_programas",
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
