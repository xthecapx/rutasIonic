angular.module('starter.controllers')

.controller('AsignaturasController', ['$scope', '$stateParams', 'getService', function($scope, $stateParams, getService) {
  $scope.perfil_id = parseInt($stateParams.perfil_id,10);
  $scope.perfilName = $stateParams.perfil_name || "Asignaturas";
  $scope.flippedCard = true;
  $scope.loading = true;

  getService
    .getData("/rutas/api_asignatura_rutas", {perfile_id: $scope.perfil_id})
    .success(function(response) {
      $scope.asignaturas = response.data;
      $scope.loading = false;
    });

  $scope.flipper = function($event) {
    var $element = angular.element($event.currentTarget).closest('.flipper');
    $element.toggleClass('flip');
  };

}]);
