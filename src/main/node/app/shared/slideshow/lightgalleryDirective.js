/**
 * Created by ruben on 08.06.16.
 */


angular.module('rs.slideshow', [])
  .directive('lightgallery', [function () {
    return {
      template: '<div id="lightgallery">'
      + '<a href="{{slide.image}}" ng-repeat="slide in slides">'
      + '<img ng-src="{{slide.image}}" />'
      + '</a>'
      + '</div>',
      scope:{
        slides: '=',
        title: '@'
      },
      restrict: 'A',
      link: function postLink($scope, element) {

        console.log('gallery');

        if ($scope.$last) {

          // ng-repeat is completed
          element.lightGallery({
            thumbnail:true
          });
        }

      }
    };
  }]);
