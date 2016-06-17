angular.module('starter.controllers')
.service('getService', ['$http', 'ApiEndpoint', function($http, ApiEndpoint) {
  var urlSedes = ApiEndpoint.url + "/api_sedes";

  this.getData = function(uri, parameters) {
    return $http({
      url:  ApiEndpoint.url + uri,
      method: "GET",
      params: parameters
    });
  };
}]);
