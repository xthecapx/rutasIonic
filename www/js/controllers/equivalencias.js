angular.module('starter.controllers')

.controller('EquivalenciasController', ['$scope', 'getService', 'ApiEndpoint', 'AuthenticationService', function($scope, getService, ApiEndpoint, login) {
  var httpCall = function(call) {
    this._call = call;
    this._scope = $scope;
    var _self = this;

    var _success = function(response) {
      var _call = _self._call;
      var _scope = _self._scope;

      _call.selectOptions.length = 0;
      console.log(_call.nameValue);
      if (_call.nameValue === "programaDestino") {
        _scope._selectOpciones.hide();
      }

      angular.forEach(response.data.data, function(value, key) {
        _call.selectOptions.push({
          id: value.id,
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

  $scope._selectOpciones = {
    show: function() {
      $scope.loader.opciones = true;
      $scope.disable.opciones = false;
    },
    hide: function() {
      $scope.loader.opciones = false;
      $scope.disable.opciones = true;
    }
  };

  $scope.disable = {
    button: false,
    opciones: false
  };

  $scope.loader = {
    opciones: false
  };

  $scope.SelectedPerfiles = null;
  selectConstructor(["programa", "opciones"]);

  httpCall({
    uri: "/rutas/api_programas_origen",
    parameters: null,
    selectOptions: $scope.programa.availableOptions,
    nameValue: "programaOrigen"
  });

  /* Watchers */
  $scope.$watch('[programa.repeatSelect, opciones.repeatSelect]', function (newValue, oldValue) {

    if (newValue[0] !== oldValue[0]) {
      $scope._selectOpciones.show();
      httpCall({
        uri: "/rutas/api_programas_destino",
        parameters: {facultad_id: $scope.programa.repeatSelect},
        selectOptions: $scope.opciones.availableOptions,
        nameValue: "programaDestino"
      });
    }

    if (newValue[1] !== oldValue[1]) {
       $scope.disable.button = true;
    }
  }, true);

}]);
