angular.module('starter.controllers', [])

.constant('ApiEndpoint', {
  //url: 'http://retalapp.com/rutas' //Deploy app to mobile
  url: 'api' //Ionic serve to test real api rest
  //url: '' // gulp serve to run Mock data
})

.controller('AppController', ['$scope', function($scope) {

}])

.controller('LoginController', ['$scope', '$rootScope', '$http', '$state', 'AuthenticationService', function($scope, $rootScope, $http, $state, auth) {
  $scope.message = "";

    $scope.user = {
      username: null,
      password: null
    };

    $scope.login = function() {
      auth.login($scope.user);
    };

    $scope.$on('login-failed', function(e, data) {
      $scope.message = data.message;
    });

    /*scope.$on('event:auth-loginRequired', function(e, rejection) {
      debugger;
      $scope.loginModal.show();
    });*/

    $scope.$on('login-confirmed', function(e) {
      $scope.message = "";
      $scope.user = {
        username: null,
        password: null
      };
      auth.loginConfirmed();
    });
}]);
