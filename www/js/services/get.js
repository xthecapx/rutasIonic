angular.module('starter.controllers')
.service('getService', ['$http', 'ApiEndpoint', 'AuthenticationService', function($http, ApiEndpoint, user) {

  this.getData = function(uri, parameters) {
    $http.defaults.headers.common.Authorization = 'Bearer ' + user.getUser().token;
    return $http({
      url:  ApiEndpoint.url + uri,
      method: "GET",
      params: parameters
    });
  };

  this.postData = function(uri, parameters) {
    return $http({
      url:  ApiEndpoint.url + uri,
      method: "POST",
      params: parameters
    });
  };
}]);
