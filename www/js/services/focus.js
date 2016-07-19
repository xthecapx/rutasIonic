angular
.module('starter.services')
.service('FocusService', function($timeout, $window) {
  this.focusElement = function(el) {
    var element = $(el);
    $timeout(function() {
      if (element) {
        element.focus();
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.show(); //open keyboard manually
        }
      }
    });
  };
});
