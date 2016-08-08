angular.module('starter.controllers')

.controller('AfinidadesDetalleController', ['$scope', '$stateParams', 'getService', 'ApiEndpoint', 'AuthenticationService', function($scope, $stateParams, getService, ApiEndpoint, login) {

  $scope.idProgramaOrigen = parseInt($stateParams.idProgramaOrigen, 10);
  $scope.loading = true;

  getService
    .getData("/rutas/api_afinidades_destino", {idProgramaOrigen: $scope.idProgramaOrigen})
    .success(function(response) {
      $scope.afinidades = response.data;
      $scope.loading = false;
    });

}]);
