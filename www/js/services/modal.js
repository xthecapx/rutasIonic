angular
.module('starter.services')
.service('ModalService', ['$ionicModal', '$rootScope', function($ionicModal, $rootScope) {

  var init = function(tpl, $scope) {

    var promise;
    $scope = $scope || $rootScope.$new();

    promise = $ionicModal.fromTemplateUrl(tpl, {
      scope: $scope,
      animation: 'slide-in-up',
      focusFirstInput: true,
      hardwareBackButtonClose: false,
      backdropClickToClose: false
    }).then(function(modal) {
      $scope.modal = modal;
      return modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    $scope.$on('destroy-modal', function() {
      $scope.modal.remove();
    });

    return promise;
  };

  return {
    init: init
  };

}]);
