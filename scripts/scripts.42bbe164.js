"use strict";angular.module("homepageApp",["ngAnimate","ngRoute","ngMaterial"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/posaunenchor",{templateUrl:"views/posaunenchor.html",controller:"PosaunenchorCtrl"}).when("/tischtennis",{templateUrl:"views/tischtennis.html",controller:"TischtennisCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("homepageApp").controller("IndexCtrl",["$scope","$mdSidenav",function(a,b){a.openLeftMenu=function(){b("left").toggle()}}]),angular.module("homepageApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("homepageApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("homepageApp").controller("PosaunenchorCtrl",["$scope",function(a){a.data={maxIndex:3,selectedIndex:0},a.next=function(){a.data.selectedIndex=Math.min(a.data.maxIndex,a.data.selectedIndex+1)},a.previous=function(){a.data.selectedIndex=Math.max(0,a.data.selectedIndex-1)}}]),angular.module("homepageApp").controller("TischtennisCtrl",["$scope",function(a){a.data={maxIndex:2,selectedIndex:0},a.next=function(){a.data.selectedIndex=Math.min(a.data.maxIndex,a.data.selectedIndex+1)},a.previous=function(){a.data.selectedIndex=Math.max(0,a.data.selectedIndex-1)}}]);