angular.module('starter.controllers')

.controller('AfinidadesController', ['$scope', 'getService', 'ApiEndpoint', 'AuthenticationService', function($scope, getService, ApiEndpoint, login) {
  var httpCall = function(call) {
    this._call = call;
    this._scope = $scope;
    var _self = this;

    var _success = function(response) {
      var _call = _self._call;
      var _scope = _self._scope;

      _call.selectOptions.length = 0;
      console.log(_call.nameValue);
      if (_call.nameValue === "programa") {
        _scope._selectPrograma.hide();
      }

      angular.forEach(response.data.data, function(value, key) {
        _call.selectOptions.push({
          id: value.id,
          name: value.value
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
    programa: false
  };

  $scope.loader = {
    programa: false
  };

  $scope.SelectedPerfiles = null;
  selectConstructor(["sede", "programa"]);

  httpCall({
    uri: "/rutas/api_afinidades",
    parameters: null,
    selectOptions: $scope.sede.availableOptions,
    nameValue: "sede"
  });

  /* Watchers */
  $scope.$watch('[sede.repeatSelect, programa.repeatSelect]', function (newValue, oldValue) {

    if (newValue[0] !== oldValue[0]) {
      $scope._selectPrograma.show();
      httpCall({
        uri: "/rutas/api_afinidades_origen",
        parameters: {idSedeOrigen: $scope.sede.repeatSelect},
        selectOptions: $scope.programa.availableOptions,
        nameValue: "programa"
      });
    }

    if (newValue[1] !== oldValue[1]) {
       $scope.disable.button = true;
    }
  }, true);

}]);
