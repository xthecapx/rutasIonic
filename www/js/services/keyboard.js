angular
.module('starter.services')
.service('KeyboardService', function($timeout) {
  this.open = function() {
    $timeout(function() {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.show(); //open keyboard manually
      }
    }, 10);
  };

  this.close = function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.close(); //open keyboard manually
    }
  };
});
