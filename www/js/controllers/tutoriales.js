angular.module('starter.controllers')

  .controller('TutorialesController', ['$scope', '$http', 'ApiEndpoint', 'AuthenticationService', function ($scope, $http, ApiEndpoint, login) {

    $scope.user = login.getUser();

    $scope.$on("update-user", function () {
      $scope.user = login.getUser();
    });

    $scope.test = "hola";
    $scope.videos = [
      { "kind": "youtube#playlistItem", "etag": "\"5C5HHOaBSHC5ZXfkrT4ZlRCi01A/ID5VriwfqP0XdWnUM6uMn7kgX3E\"", "id": "UEw4VG04VWlQZGdZNXdiVzRlVFhMYVNUWXhobW5aaTlHeC41NkI0NEY2RDEwNTU3Q0M2", "snippet": { "publishedAt": "2016-11-29T20:20:00.000Z", "channelId": "UCedNZCrQy7ZgtFKh8mLMrbA", "title": "Pérdida de calidad de estudiante y reingreso", "description": "", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/uqZEN9WEOIg/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/uqZEN9WEOIg/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/uqZEN9WEOIg/hqdefault.jpg", "width": 480, "height": 360 }, "standard": { "url": "https://i.ytimg.com/vi/uqZEN9WEOIg/sddefault.jpg", "width": 640, "height": 480 } }, "channelTitle": "Cristian Marquez", "playlistId": "PL8Tm8UiPdgY5wbW4eTXLaSTYxhmnZi9Gx", "position": 0, "resourceId": { "kind": "youtube#video", "videoId": "uqZEN9WEOIg" } } },

      { "kind": "youtube#playlistItem", "etag": "\"5C5HHOaBSHC5ZXfkrT4ZlRCi01A/0d1syTg9i8f7-LG0Cf4JKnTPkxU\"", "id": "UEw4VG04VWlQZGdZNXdiVzRlVFhMYVNUWXhobW5aaTlHeC4yODlGNEE0NkRGMEEzMEQy", "snippet": { "publishedAt": "2016-11-29T20:20:00.000Z", "channelId": "UCedNZCrQy7ZgtFKh8mLMrbA", "title": "Nivelación e idiomas", "description": "", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/57vlyQbFSMg/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/57vlyQbFSMg/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/57vlyQbFSMg/hqdefault.jpg", "width": 480, "height": 360 }, "standard": { "url": "https://i.ytimg.com/vi/57vlyQbFSMg/sddefault.jpg", "width": 640, "height": 480 } }, "channelTitle": "Cristian Marquez", "playlistId": "PL8Tm8UiPdgY5wbW4eTXLaSTYxhmnZi9Gx", "position": 1, "resourceId": { "kind": "youtube#video", "videoId": "57vlyQbFSMg" } } },

      { "kind": "youtube#playlistItem", "etag": "\"5C5HHOaBSHC5ZXfkrT4ZlRCi01A/EhFc-ZvOg250Mu38SpKdi1sqmUY\"", "id": "UEw4VG04VWlQZGdZNXdiVzRlVFhMYVNUWXhobW5aaTlHeC4wMTcyMDhGQUE4NTIzM0Y5", "snippet": { "publishedAt": "2016-11-29T20:20:00.000Z", "channelId": "UCedNZCrQy7ZgtFKh8mLMrbA", "title": "¿Cómo es el plan de estudios de un programa de pregrado de la Universidad Nacional?", "description": "", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/OVhRRgUNtF4/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/OVhRRgUNtF4/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/OVhRRgUNtF4/hqdefault.jpg", "width": 480, "height": 360 }, "standard": { "url": "https://i.ytimg.com/vi/OVhRRgUNtF4/sddefault.jpg", "width": 640, "height": 480 } }, "channelTitle": "Cristian Marquez", "playlistId": "PL8Tm8UiPdgY5wbW4eTXLaSTYxhmnZi9Gx", "position": 2, "resourceId": { "kind": "youtube#video", "videoId": "OVhRRgUNtF4" } } },

      { "kind": "youtube#playlistItem", "etag": "\"5C5HHOaBSHC5ZXfkrT4ZlRCi01A/XqGMeqDU7nFw9q2IwcP5OVB1QbI\"", "id": "UEw4VG04VWlQZGdZNXdiVzRlVFhMYVNUWXhobW5aaTlHeC41MjE1MkI0OTQ2QzJGNzNG", "snippet": { "publishedAt": "2016-11-29T20:20:00.000Z", "channelId": "UCedNZCrQy7ZgtFKh8mLMrbA", "title": "Todo sobre créditos", "description": "", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/nSFZZXoa2Lg/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/nSFZZXoa2Lg/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/nSFZZXoa2Lg/hqdefault.jpg", "width": 480, "height": 360 }, "standard": { "url": "https://i.ytimg.com/vi/nSFZZXoa2Lg/sddefault.jpg", "width": 640, "height": 480 } }, "channelTitle": "Cristian Marquez", "playlistId": "PL8Tm8UiPdgY5wbW4eTXLaSTYxhmnZi9Gx", "position": 3, "resourceId": { "kind": "youtube#video", "videoId": "nSFZZXoa2Lg" } } },

      { "kind": "youtube#playlistItem", "etag": "\"5C5HHOaBSHC5ZXfkrT4ZlRCi01A/JWWzbi2jLcE6vBURHB5bwoJPWiw\"", "id": "UEw4VG04VWlQZGdZNXdiVzRlVFhMYVNUWXhobW5aaTlHeC4wOTA3OTZBNzVEMTUzOTMy", "snippet": { "publishedAt": "2016-11-29T20:20:00.000Z", "channelId": "UCedNZCrQy7ZgtFKh8mLMrbA", "title": "¿Qué promedios hay en la Unviersidad Nacional de Colombia?", "description": "", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/POMVUs-Wdls/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/POMVUs-Wdls/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/POMVUs-Wdls/hqdefault.jpg", "width": 480, "height": 360 }, "standard": { "url": "https://i.ytimg.com/vi/POMVUs-Wdls/sddefault.jpg", "width": 640, "height": 480 } }, "channelTitle": "Cristian Marquez", "playlistId": "PL8Tm8UiPdgY5wbW4eTXLaSTYxhmnZi9Gx", "position": 4, "resourceId": { "kind": "youtube#video", "videoId": "POMVUs-Wdls" } } }
    ];

    $scope.youtubeParams = {
      //key: 'AIzaSyDEv4jB7vQTizPXFw7USNegtHpcYBaqx5s', //Android
      key: 'AIzaSyCp_NZfdb9Shi99YcMitboLSQ-ibcrQr4Y', //Browser
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

    //Get videos information
    /*$http.get('https://www.googleapis.com/youtube/v3/playlistItems', { params: $scope.youtubeParams }).success(function (response) {
      angular.forEach(response.items, function (child) {
        $scope.videos.push(child);
      });
    });*/

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
