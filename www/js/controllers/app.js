angular.module('starter.controllers', [])

.constant('ApiEndpoint', {
  //url: 'http://retalapp.com/rutas/rutas' //Deploy app to mobile
  url: 'api' //Ionic serve to test real api rest
  //url: '' // gulp serve to run Mock data
})

.controller('AppController', ['$scope', '$http', '$ionicModal', '$state', 'AuthenticationService', function($scope, $http, $ionicModal, $state, user) {
  $ionicModal.fromTemplateUrl('templates/commons/login.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.loginModal = modal;

    if(!user.getUser()) {
      $scope.loginModal.show();
    }

    $scope.$on('$destroy', function() {
      $scope.loginModal.remove();
    });

    /*$scope.$on('event:auth-loginRequired', function(e, rejection) {
      debugger;
      $scope.loginModal.show();
    });*/

    $scope.$on('event:auth-loginConfirmed', function(e) {
      $scope.loginModal.hide();
    });

    $scope.$on('event:auth-logout-complete', function() {
      $scope.loginModal.show();
    });

    $scope.$on('event:auth-logout-complete', function() {
      $state.go('app.home', {}, {reload: true, inherit: false});
    });
  }); //then
}])

.controller('LoginController', ['$scope', '$http', '$state', 'AuthenticationService', function($scope, $http, $state, AuthenticationService) {
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
}]);
