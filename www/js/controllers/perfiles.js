angular.module('starter.controllers')

.controller('PerfilesController', ['$scope', '$stateParams', 'getService', 'ApiEndpoint', function($scope, $stateParams, getService, ApiEndpoint) {
  $scope.programa_id = parseInt($stateParams.programa_id,10);
  $scope.loading = true;

  getService
    .getData("/rutas/api_perfiles", {programa_id: $scope.programa_id})
    .success(function(response) {
      $scope.loading = false;
      $scope.perfiles = response.data;
    });

}]);
