angular
.module('starter.services', ['http-auth-interceptor'])
.service('AuthenticationService', ['$rootScope', '$http', 'authService', 'ApiEndpoint', '$state',
  function($rootScope, $http, authService, ApiEndpoint, $state) {
      this.login = function(user) {
        $http({
          url:  ApiEndpoint.url + '/users/api_users/login',
          method: "POST",
          params: {
            username: user.username,
            password: user.password,
            client_id: "android",
            client_secret: "O20wgetsGF82eFTwTVA2qWFAcxGhiq0x"
          }
        })
        .success(function (data, status, headers, config) {
            localStorage.setItem('user', JSON.stringify({token: data.data.token.access_token, user: data.data.name}));
            authService.loginConfirmed(data, function(config) {
              config.headers.Authorization = data.data.token.access_token;
              return config;
            });
        })
        .error(function (data, status, headers, config) {
          $rootScope.$broadcast('event:auth-login-failed', data);
        });

      };
      this.logout = function(user) {
          $state.go('app.home');
          localStorage.removeItem('user');
      };
      this.loginCancelled = function() {
        authService.loginCancelled();
      };
      this.getUser = function() {
        return JSON.parse(localStorage.getItem('user'));
      };
  }
]);
