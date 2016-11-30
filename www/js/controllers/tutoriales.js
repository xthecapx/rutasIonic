angular.module('starter.controllers')

.controller('TutorialesController', ['$scope', '$http', 'ApiEndpoint', 'AuthenticationService', function($scope, $http, ApiEndpoint, login) {

  $scope.user = login.getUser();

  $scope.$on("update-user", function() {
    $scope.user = login.getUser();
  });

  $scope.test = "hola";
  $scope.videos = [];

  $scope.youtubeParams = {
    key: 'AIzaSyDEv4jB7vQTizPXFw7USNegtHpcYBaqx5s', //Android
    //key: 'AIzaSyCp_NZfdb9Shi99YcMitboLSQ-ibcrQr4Y', //Browser
    //type: 'video',
    maxResults: '5',
    part: 'id,snippet', 
    //q: '',
    //videoCategoryId: '27',
    //order: 'date',
    //channelId: 'UCedNZCrQy7ZgtFKh8mLMrbA',
    playlistId: 'PL8Tm8UiPdgY5wbW4eTXLaSTYxhmnZi9Gx'
  };

  $scope.playerVars = {
    rel: 0,
    showinfo: 0,
    modestbranding: 0,
  }

  $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {params:$scope.youtubeParams}).success(function(response){
    angular.forEach(response.items, function(child) {
      $scope.videos.push(child);
    });
  });

  /* Watchers */
  /*$scope.$watch('[test]', function (newValue, oldValue) {
    if (newValue[0] !== oldValue[0]) {

    }

    if (newValue[1] !== oldValue[1]) {

    }

    if (newValue[2] !== oldValue[2]) {

    }
  }, true);*/

}]);
