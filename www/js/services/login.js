angular
.module('starter.services', [])
.service('AuthenticationService', ['$rootScope', '$http', 'ApiEndpoint', '$state',
  function($rootScope, $http, ApiEndpoint, $state) {
      this.login = function(user) {
        $http({
          url:  ApiEndpoint.url + '/users/api_users/login',
          method: "POST",
          params: {
            username: user.username,
            password: user.password,
            client_id: ApiEndpoint.client_id,
            client_secret: ApiEndpoint.client_secret
          }
        })
        .success(function (data, status, headers, config) {
            localStorage.setItem('user', JSON.stringify({token: data.data.token.access_token, user: data.data.name}));
            $rootScope.$broadcast('login-confirmed', data);
        })
        .error(function (data, status, headers, config) {
          $rootScope.$broadcast('login-failed', data);
        });
      };

      this.logout = function(user) {
          $state.go('app.login');
          localStorage.removeItem('user');
      };

      this.getUser = function() {
        return JSON.parse(localStorage.getItem('user'));
      };

      this.loginConfirmed = function() {
        $rootScope.$broadcast('destroy-modal');
        $state.go('app.rutas', {}, {reload: true, inherit: false});
      };
  }
]);
