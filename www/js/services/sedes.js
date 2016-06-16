angular.module('starter.controllers')
.service('sedesService', ['$http', 'ApiEndpoint', function($http, ApiEndpoint) {
  var urlSedes = ApiEndpoint.url + "/api_sedes";

  this.promise = $http.get(urlSedes).success(function(response) {
    return response.data;
  });
}])
.service('facultadService', ['$http', function($http) {

}]);
