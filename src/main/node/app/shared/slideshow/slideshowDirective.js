'use strict';

/**
 * @ngdoc directive
 * @name homepageApp.directive:slideshow
 * @description
 * # slideshow
 */
angular.module('rs.slideshow', [])
  .directive('slideshow', [function () {
    return {
      templateUrl: 'shared/slideshow/slideshowTemplate.html',
      restrict: 'E',
      scope:{
      	slides: '=',
        title: '@'
      },
      link: function postLink($scope) {

        if(!$scope.slides){
            //0B9OtAb0rZWfGfmtRc1Fra0FvdWgyYkJpME5fSTNtVGNkTTd6R1I2RFh2UWw5bV91ZFRMTUk

			$scope.slides = [
	            {image: 'http://googledrive.com/host/0B9OtAb0rZWfGfmtRc1Fra0FvdWgyYkJpME5fSTNtVGNkTTd6R1I2RFh2UWw5bV91ZFRMTUk/IMG_2781.JPG', description: 'Image 00'},
	            {image: 'images/Baum.jpg', description: 'Image 01'}
	        ];
    	}

        $scope.currentIndex = 1;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
            console.log($scope.currentIndex);
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
            console.log($scope.currentIndex);
        };

      }
    };
  }])
  .animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                console.log('add', className);

                if (className === 'ng-hide') {

                    var finishPoint = 800;
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });


                }
                else {
                    done();
                }
                done();
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                console.log('rm', className);

                if (className === 'ng-hide') {
                    element.removeClass('ng-hide');


                    var startPoint = 800;
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });

                }
                else {
                    done();
                }
                done();
            }
        };
    })
;
