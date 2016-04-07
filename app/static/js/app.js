/// <reference path="angular.min.js" />

var lax = angular.module("sweatRidesApp", ["ngRoute"])
	.config(function($routeProvider) {
	    $routeProvider.
	            when('/mans', {
	                templateUrl: '../partials/manufacturersTable.html',
	                controller: 'manTableCtrl'
	            }).
	            when('/cars', {
	                templateUrl: '../partials/carsTable.html',
	                controller: 'carsTableCtrl'
	            }).
	            when('/about', {
	                templateUrl: '../partials/about.html',
	                controller: 'aboutCtrl'
	            })
	})
	.controller('manTableCtrl', function($scope) {
	$scope.message = 'This is Add new man info';
	})
	.controller('carsTableCtrl', function($scope) {
	$scope.message = 'This is car info';
	})
	.controller('aboutCtrl', function($scope) {
	$scope.message = 'This is about info';
	})