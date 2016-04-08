/// <reference path="angular.min.js" />

var sweatRidesApp = angular.module("sweatRidesApp", ["ngRoute","angularUtils.directives.dirPagination"])
	.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {
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
	            }).
	            when("/home", {
	                templateUrl: "../partials/home.html",
	                controller: "homeCtrl"
	            }).
               when("/man_:id", {
                   templateUrl: "../partials/manufacturer.html",
                   controller: "manCtrl"
               }).
               when("/car", {
                   templateUrl: "../partials/car.html",
                   controller: "carCtrl"
               })
	            .otherwise({redirectTo: '/home'})
	}]);



sweatRidesApp.service('dataService2', function($http) {
delete $http.defaults.headers.common['X-Requested-With'];
this.getData = function() {
    // $http() returns a $promise that we can add handlers with .then()
    return $http({
        method: 'GET',
        url: 'http://private-2ac67-carsapi1.apiary-mock.com/manufacturer',
        headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
     });
 }
});


    sweatRidesApp.controller("manTableCtrl", function($scope,$location,Data, dataService2) {
	$scope.sortTypeMan     = ''; // set the default sort type
	$scope.sortReverseMan  = false;  // set the default sort order
	$scope.message="ManTable Message";
	$scope.goToItem= function(man){
            Data.set(man);
            $scope.selectedItem = man;
            $location.path("/man_"+man.id);
            $scope.apply();
	};
	$scope.manufacturers = null;
	dataService2.getData().then(function(response) {
	    $scope.manufacturers = response.data;
	});
    });




    sweatRidesApp.controller("manCtrl",['$scope','$location','Data',function($scope,$location,Data){
	$scope.message="Manufacturer Message";
	$scope.man = Data.get();
    }]);






    sweatRidesApp.controller("carCtrl",['$scope','$location','Data',function($scope,$location,Data){
	$scope.message="Car Message";
	$scope.car = Data.get();
    }]);



sweatRidesApp.service('dataService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];
    this.getData = function() {
	// $http() returns a $promise that we can add handlers with .then()
	return $http({
            method: 'GET',
            url: 'http://private-2ac67-carsapi1.apiary-mock.com/cars',
            headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
	});
    }
});




    sweatRidesApp.controller("carsTableCtrl", function($scope,$location,Data, dataService) {
	$scope.sortType     = ''; // set the default sort type
	$scope.sortReverse  = false;  // set the default sort order
	$scope.goToItem= function(car){
            Data.set(car);
            $scope.selectedItem = car;
            $location.path("/car_"+car.id);
            $scope.apply();
	};
	$scope.cars =null;
	    dataService.getData().then(function(response) {
		$scope.cars = response.data;
	    });
});






    sweatRidesApp.controller("aboutCtrl", ['$scope',function($scope) {
	$scope.message = "ABOUT";
    }]);





    sweatRidesApp.controller("homeCtrl", ['$scope',function($scope) {
	$scope.message = "HOME";
    }]);





   sweatRidesApp.factory('Data', function() {
       var savedData = {}
       function set(data) {
         savedData = data;
       }
       function get() {
        return savedData;
       }

       return {
        set: set,
        get: get
       }

      });





