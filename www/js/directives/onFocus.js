angular.module('starter.directives')
.directive('autoFocus', function ($document, $compile, $rootScope, FocusService) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      $timeout(function() {
        element[0].focus();
      }, 300);
    }
  };
})

.directive('detectFocus', function ($document, $compile, $rootScope) {
  return {
    restrict: "AC",
    link: function(scope, element, attrs) {
        element.on("focus", function() {
          $rootScope.$broadcast(attrs.detectFocus + '-focus');
        });
    }
  };
})

.directive('detectBlur', function ($document, $compile, $rootScope) {
  return {
    restrict: "AC",
    link: function(scope, element, attrs) {
        elem.on("blur", function() {
          console.log(attrs.detectBlur + " lost focus");
        });
    }
  };
})

.directive('changeInput', function ($document, $compile, $rootScope) {
  return {
    restrict: "AC",
    link: function(scope, element, attrs) {
        element.on("input propertychange paste", function() {
          $rootScope.$broadcast(attrs.changeInput + '-change');
        });
    }
  };
});
