angular.module('starter.controllers')

.controller('PerfilesController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http) {
  $scope.programa_id = parseInt($stateParams.programa_id,10);

  $http({
    url: "./api/api_perfiles",
    method: "GET",
    params: {programa_id: $scope.programa_id}
  }).success(function(response) {
    $scope.perfiles = response.data;
  });

}]);
