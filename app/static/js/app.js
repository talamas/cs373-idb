/// <reference path="angular.min.js" />


angular.module("sweatRidesApp", ["ngRoute"])
	.config(function($routeProvider) {
	    $routeProvider
	            .when("/mans", {
	                templateUrl: "../partials/manufacturerTable.html",
	                controller: "manTableCtrl"
	            }).
	            when("/cars", {
	                templateUrl: "../partials/carsTable.html",
	                controller: "carsTableCtrl"
	            }).
	            when("/about", {
	                templateUrl: "../partials/about.html",
	                controller: "aboutCtrl"
	            })
	})
	.controller("manTableCtrl", ['$scope',function($scope) {
		$scope.message = "MANUFACTURERS";
	}])
	.controller("carsTableCtrl", ['$scope', function($scope) {
		$scope.message = "CARS";
	}])
	.controller("aboutCtrl", ['$scope',function($scope) {
		$scope.message = "ABOUT";
	}])