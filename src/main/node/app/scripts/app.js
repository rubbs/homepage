'use strict';

/**
 * @ngdoc overview
 * @name homepageApp
 * @description
 * # homepageApp
 *
 * Main module of the application.
 */
angular
  .module('homepageApp', [
    'ngAnimate',
    'ngRoute',
    'ngMaterial',
    'ngTouch',
    'ngSanitize',
    'rs.putzplan',
    'rs.balaton',
    'rs.about',
    'rs.datenschutz',
    'rs.disclaimer',
    'rs.main',
    'rs.posaunenchor',
    'rs.ejw',
    'rs.weihnachtsmarkt'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/main/mainView.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'components/about/aboutView.html',
        controller: 'AboutCtrl'
      })
      .when('/posaunenchor', {
        templateUrl: 'components/posaunenchor/posaunenchorView.html',
        controller: 'PosaunenchorCtrl'
      })
      .when('/weihnachtsmarkt', {
        templateUrl: 'components/weihnachtsmarkt/weihnachtsmarktView.html',
        controller: 'WeihnachtsmarktCtrl'
      })
      .when('/putzplan', {
        templateUrl: 'components/putzplan/putzplanView.html',
        controller: 'PutzplanCtrl'
      })
      .when('/disclaimer', {
        templateUrl: 'components/disclaimer/disclaimerView.html',
        controller: 'DisclaimerCtrl'
      })
      .when('/datenschutz', {
        templateUrl: 'components/datenschutz/datenschutzView.html',
        controller: 'DatenschutzCtrl'
      })
      .when('/ejw', {
        templateUrl: 'components/ejw/ejwView.html',
        controller: 'EjwCtrl'
      })
      .when('/balaton-speiseplan', {
        templateUrl: 'components/balaton-speiseplan/balaton-speiseplanView.html',
        controller: 'BalatonSpeiseplanCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($mdThemingProvider){
    $mdThemingProvider.theme('default')
    .primaryPalette('green')
    .accentPalette('orange')
    ;
    $mdThemingProvider.theme('ejw')
    .primaryPalette('purple')
    .accentPalette('red')
    ;
  })
  ;
