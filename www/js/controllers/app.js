angular.module('starter.controllers', [])

.constant('ApiEndpoint', {
  //url: 'http://retalapp.com/rutas/rutas' //Deploy app to mobile
  url: 'api' //Ionic serve to test real api rest
  //url: '' // gulp serve to run Mock data
})

.controller('AppController', ['$scope', '$http', '$ionicModal', '$state', 'AuthenticationService', function($scope, $http, $ionicModal, $state, user) {

}])

.controller('LoginController', ['$scope', '$rootScope', '$http', '$state', 'AuthenticationService', function($scope, $rootScope, $http, $state, AuthenticationService) {
  $scope.message = "";

    $scope.user = {
      username: null,
      password: null
    };

    $scope.login = function() {
      AuthenticationService.login($scope.user);
    };

    $scope.$on('event:auth-login-failed', function(e, data) {
      $scope.message = data.message;
    });

    /*scope.$on('event:auth-loginRequired', function(e, rejection) {
      debugger;
      $scope.loginModal.show();
    });*/

    $scope.$on('event:auth-loginConfirmed', function(e) {
      $scope.message = "";
      $scope.user = {
        username: null,
        password: null
      };
      $rootScope.$broadcast('destroy-modal');
      $state.go('app.rutas', {}, {reload: true, inherit: false});
    });
}]);
