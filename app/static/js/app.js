/// <reference path="angular.min.js" />

var lax = angular.module("sweatRidesApp", ["ngRoute"])
	.config(function($routeProvider) {
	    $routeProvider.
	            when('/mans', {
	                templateUrl: '../partials/manufacturerTable.html',
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
	$scope.message = 'MANUFACTURERS';
	})
	.controller('carsTableCtrl', function($scope) {
	$scope.message = 'CARS';
	})
	.controller('aboutCtrl', function($scope) {
	$scope.message = 'ABOUT';
	})