'use strict';

/**
 * @ngdoc function
 * @name homepageApp.controller:PosaunenchorCtrl
 * @description
 * # PosaunenchorCtrl
 * Controller of the homepageApp
 */
angular.module('rs.posaunenchor', ['rs.slideshow'])
  .controller('PosaunenchorCtrl', function ($scope) {

    // Bilder aus Gemmrigheim
    var baseUrl = 'http://googledrive.com/host/0B9OtAb0rZWfGfmtRc1Fra0FvdWgyYkJpME5fSTNtVGNkTTd6R1I2RFh2UWw5bV91ZFRMTUk/';
    $scope.slides = [
      {image: baseUrl + 'IMG_2781.JPG', description: 'Image 00'},
      {image: baseUrl + 'IMG_2782.JPG', description: 'Image 00'},
      {image: baseUrl + 'IMG_2783.JPG', description: 'Image 00'},
      {image: baseUrl + 'IMG_2784.JPG', description: 'Image 00'},
      {image: baseUrl + 'IMG_2787.JPG', description: 'Image 00'},
      {image: baseUrl + 'IMG_2792.JPG', description: 'Image 00'},
      {image: baseUrl + 'IMG_2793.JPG', description: 'Image 00'},
      {image: baseUrl + 'IMG_2794.JPG', description: 'Image 00'},
      {image: baseUrl + 'IMG_2797.JPG', description: 'Image 00'}
    ];

    // Bilder vom Abend der Begegnung
    var adbUrl = 'http://googledrive.com/host/0B9OtAb0rZWfGfmNVYk9TYUozZG1DNkEwZkdkNG9BNzZRb294VjVWWVpnTEw3QXo4Y1RIa1U/';
    $scope.adbSlides = [
      {image: adbUrl + '0001.jpg', description: ''},
      {image: adbUrl + '0002.jpg', description: ''},
      {image: adbUrl + '0003.jpg', description: ''},
      {image: adbUrl + '0004.jpg', description: ''},
      {image: adbUrl + '0005.jpg', description: ''},
      {image: adbUrl + '0006.jpg', description: ''},
      {image: adbUrl + '0007.jpg', description: ''},
      {image: adbUrl + '0008.jpg', description: ''},
      {image: adbUrl + '0009.jpg', description: ''},
      {image: adbUrl + '0010.jpg', description: ''},
      {image: adbUrl + '0011.jpg', description: ''},
      {image: adbUrl + '0012.jpg', description: ''},
      {image: adbUrl + '0013.jpg', description: ''},
      {image: adbUrl + '0014.jpg', description: ''},
      {image: adbUrl + '0015.jpg', description: ''},
      {image: adbUrl + '0016.jpg', description: ''}
        ];
  });
