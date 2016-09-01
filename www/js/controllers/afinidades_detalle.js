angular.module('starter.controllers')

.controller('AfinidadesDetalleController', ['$scope', '$stateParams', '$filter', 'getService', 'ApiEndpoint', 'AuthenticationService', function($scope, $stateParams, $filter, getService, ApiEndpoint, login) {

  $scope.idProgramaOrigen = parseInt($stateParams.idProgramaOrigen, 10);
  $scope.loading = true;
  $scope.reverse = true;

  $scope.sorterFunc = function(item){
    return parseInt(item.errorOrigenDestino);
  };

  getService
    .getData("/rutas/api_afinidades_destino", {idProgramaOrigen: $scope.idProgramaOrigen})
    .success(function(response) {
      $scope.afinidades = response.data;
      $scope.loading = false;
    });

     /*
      * if given group is the selected group, deselect it
      * else, select the given group
      */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

}]);
