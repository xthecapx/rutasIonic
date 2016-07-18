angular.module('starter.controllers')

/*.controller('HomeController', ['$scope', '$ionicHistory', function($scope, $ionicHistory) {
  $ionicHistory.clearHistory();
}])*/

.controller('LoginController', ['$scope', '$rootScope', '$http', '$state', 'AuthenticationService', function($scope, $rootScope, $http, $state, auth) {

  $scope.init = function(message, loader, username, password) {
    $scope.message = message;
    $scope.loader = loader;

    $scope.user = {
      username: username,
      password: password
    };
  };

  $scope.login = function() {
    $scope.loader = true;
    auth.login($scope.user);
  };

  $scope.init();

  $scope.$on('login-failed', function(e, data) {
    $scope.init(data.message, false);
  });

  $scope.$on('login-confirmed', function(e) {
    $scope.init();
    auth.loginConfirmed();
  });
}]);
