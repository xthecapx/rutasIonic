angular.module('starter.controllers')

/*.controller('HomeController', ['$scope', '$ionicHistory', function($scope, $ionicHistory) {
  $ionicHistory.clearHistory();
}])*/

.controller('LoginController', ['$scope', '$rootScope', '$http', '$state', 'AuthenticationService', 'FocusService', function($scope, $rootScope, $http, $state, auth, focus) {

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

  $scope.doFocus = function(el) {
    focus.focusElement(el);

    $(el).parent().parent().on("input propertychange paste", "input", $.proxy(function(el) {
      this.message = "";
      $(el).unbind();
    }, $scope)).trigger("propertychange");
  };

  $scope.init();

  $scope.$on('login-failed', function(e, data) {
    $scope.doFocus(".username");
    $scope.message = data.message;
    $scope.loader = false;
  });

  $scope.$on('login-confirmed', function(e) {
    $scope.init();
    auth.loginConfirmed();
  });
}]);
