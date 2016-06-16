angular.module('starter.controllers')
.service('sedesService', ['$http', function($http) {
  var urlSedes = "./api/api_sedes";

  this.promise = $http.get(urlSedes).success(function(response) {
    return response.data;
  });
}])
.service('facultadService', ['$http', function($http) {
  
}]);
