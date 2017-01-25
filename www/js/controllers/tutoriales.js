angular.module('starter.controllers')

  .controller('TutorialesController', ['$scope', '$http', 'ApiEndpoint', 'AuthenticationService', '$sce', '$timeout', function ($scope, $http, ApiEndpoint, login, $sce, $timeout) {

    $scope.user = login.getUser();

    $scope.$on("update-user", function () {
      $scope.user = login.getUser();
    });


    $scope.state = null;
    $scope.API = null;
    $scope.currentVideo = 0;

    $scope.onPlayerReady = function (API) {
      $scope.API = API;
    };

    $scope.onCompleteVideo = function () {
      $scope.isCompleted = true;

      $scope.currentVideo++;

      if ($scope.currentVideo >= $scope.videos.length) {
        $scope.currentVideo = 0;
      }

      $scope.setVideo($scope.currentVideo);
    };

    $scope.videos = [
      {
        sources: [
          { src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4" },
          { src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.webm"), type: "video/webm" },
          { src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg" }
        ]
      },
      {
        sources: [
          { src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov"), type: "video/mp4" },
          { src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/big_buck_bunny_720p_stereo.ogg"), type: "video/ogg" }
        ]
      }
    ];

    $scope.config = {
      preload: "none",
      autoHide: false,
      autoHideTime: 3000,
      autoPlay: false,
      sources: $scope.videos[0].sources,
      theme: {
        url: "lib/videogular-themes-default/videogular.css"
      },
      plugins: {
        poster: "http://www.videogular.com/assets/images/videogular.png"
      }
    };

    $scope.setVideo = function (index) {
      $scope.API.stop();
      $scope.currentVideo = index;
      $scope.config.sources = $scope.videos[index].sources;
      $timeout($scope.API.play.bind($scope.API), 100);
    };

  }]);
