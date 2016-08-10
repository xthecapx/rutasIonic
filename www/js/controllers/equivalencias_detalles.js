angular.module('starter.controllers')

.controller('EquivalenciasDetalleController', ['$scope', '$stateParams', 'getService', 'ApiEndpoint', 'AuthenticationService', function($scope, $stateParams, getService, ApiEndpoint, login) {
  $scope.equivalenciaId = parseInt($stateParams.equivalenciaId, 10);
  $scope.loading = true;
  $scope.flippedCard = true;

  getService
    .getData("/rutas/api_aequivalencias", {equivalenciaId: $scope.equivalenciaId})
    .success(function(response) {
      $scope.equivalencias = response.data;
      $scope.loading = false;
      $scope.origen = $scope.equivalencias[0].equivalencia.programaOrigen.split("|");
      $scope.destino = $scope.equivalencias[0].equivalencia.programaDestino.split("|");
    });

  $scope.flipper = function($event) {
    var $element = angular.element($event.currentTarget).closest('.flipper');
    $element.toggleClass('flip');
  };

}]);
