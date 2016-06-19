angular.module('starter.controllers')

.controller('AsignaturasController', ['$scope', '$stateParams', 'getService', function($scope, $stateParams, getService) {
  $scope.perfil_id = parseInt($stateParams.perfil_id,10);
  $scope.perfilName = $stateParams.perfil_name || "Asignaturas";

  getService
    .getData("/api_asignatura_rutas", {perfile_id: $scope.perfil_id})
    .success(function(response) {
      $scope.asignaturas = response.data;
    });

}]);
