// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'starter.services', 'youtube-embed'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/commons/menu.html',
    controller: 'AppController'
  })

  .state('app.rutas', {
    url: '/rutas',
    views: {
      'menuContent': {
        templateUrl: 'templates/views/rutas/programa.html',
        controller: 'ProgramasController'
      }
    }
  })

  .state('app.perfiles', {
    url: '/rutas/perfiles/:programa_id',
    views: {
      'menuContent': {
        templateUrl: 'templates/views/rutas/perfiles.html',
        controller: 'PerfilesController'
      }
    }
  })

  .state('app.asignaturas', {
    url: '/rutas/perfiles/asignaturas/:perfil_id/:perfil_name',
    views: {
      'menuContent': {
        templateUrl: 'templates/views/rutas/asignaturas.html',
        controller: 'AsignaturasController'
      }
    }
  })

  .state('app.login', {
    url: '/login',
    onEnter: ['ModalService', 'AuthenticationService', '$rootScope', '$state', function(ModalService, auth, $rootScope, $state) {
      ModalService
        .init('templates/commons/login.html')
        .then(function(modal) {
          if (!auth.getUser()) {
            modal.show();
          } else {
            auth.loginConfirmed();
          }
        });
    }]
  })

  .state('app.logout', {
    url: '/logout',
    onEnter: ['AuthenticationService', function(auth) {
      auth.logout(auth.getUser());
    }]
  })

  .state('app.afinidades', {
    url: '/afinidades',
    views: {
      'menuContent': {
        templateUrl: 'templates/views/doble_titulacion/afinidades.html',
        controller: 'AfinidadesController'
      }
    }
  })

  .state('app.afinidades_detalle', {
    url: '/afinidades/detalles/:idProgramaOrigen',
    views: {
      'menuContent': {
        templateUrl: 'templates/views/doble_titulacion/afinidades_detalle.html',
        controller: 'AfinidadesDetalleController'
      }
    }
  })

  .state('app.equivalencias', {
    url: '/equivalencias',
    views: {
      'menuContent': {
        templateUrl: 'templates/views/equivalencias/equivalencias.html',
        controller: 'EquivalenciasController'
      }
    }
  })

  .state('app.equivalencias_detalles', {
    url: '/equivalencias/detalles/:equivalenciaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/views/equivalencias/equivalencias_detalles.html',
        controller: 'EquivalenciasDetalleController'
      }
    }
  })

  .state('app.tutoriales', {
    url: '/tutoriales',
    views: {
      'menuContent': {
        templateUrl: 'templates/views/tutoriales/tutoriales.html',
        controller: 'TutorialesController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
