angular
.module('starter.services')
.service('FocusService', ['$timeout', '$window', function($timeout, $window) {
  this.focusElement = function(el) {
    var element = $(el);
    $timeout(function() {
      if (element) {
        element.focus();
      }
    });
  };
}]);
