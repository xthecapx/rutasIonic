angular.module('starter.controllers')

.controller('PerfilesController', ['$scope', '$stateParams', '$http', 'ApiEndpoint', function($scope, $stateParams, $http, ApiEndpoint) {
  $scope.programa_id = parseInt($stateParams.programa_id,10);

  $http({
    url: ApiEndpoint.url + "/api_perfiles",
    method: "GET",
    params: {programa_id: $scope.programa_id}
  }).success(function(response) {
    $scope.perfiles = response.data;
  });

}]);
