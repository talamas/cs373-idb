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
         when("/car_:id", {
            templateUrl: "../partials/car.html",
            controller: "carCtrl"
         })
         .otherwise({redirectTo: '/home'});
}]);

sweatRidesApp.service('dataService2', function($http) {
   delete $http.defaults.headers.common['X-Requested-With'];
   this.getData = function() {
       // $http() returns a $promise that we can add handlers with .then()
      return $http({
         method: 'GET',
         url: 'http://sweetrides.me/get_manufacturers',
         headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
      });
   };
});

sweatRidesApp.controller("manTableCtrl", function($scope,$location,ManData,dataService2) {
   $scope.sortTypeMan     = ''; // set the default sort type
   $scope.sortReverseMan  = false;  // set the default sort order
   $scope.message="ManTable Message";
   $scope.goToMan= function(man){
      ManData.set(man);
      $scope.selectedItem = man;
      $location.path("/man_"+man.id);
   };
   $scope.manufacturers = null;
   dataService2.getData().then(function(response) {
       $scope.manufacturers = response.data;
   });
});

sweatRidesApp.controller("manCtrl", function($scope,$location,ManData, dataService, CarData){
    $scope.message="Manufacturer Message";
    $scope.man = ManData.get();
    $scope.cars = null;
    $scope.goToCar= function(car) {
	CarData.set(car);
	$scope.selectedItem = car;
	$location.path("/car_"+car.id);
    };
    dataService.getData().then(function(response) {
	$scope.cars = response.data;
    });
});

sweatRidesApp.controller("carCtrl",function($scope,$location,CarData, dataService2,ManData){
    $scope.message="Car Message";
    $scope.car = CarData.get();
    $scope.mans = null;
    $scope.goToMan= function(man){
	ManData.set(man);
	$scope.selectedItem = man;
	$location.path("/man_"+man.id);
    };
    dataService2.getData().then(function(response) {
	$scope.mans = response.data;
    });
    $scope.random = function(){
      return 0.5 - Math.random();
    }
    
});

sweatRidesApp.service('dataService', function($http) {
   delete $http.defaults.headers.common['X-Requested-With'];
   this.getData = function() {
      // $http() returns a $promise that we can add handlers with .then()
      return $http({
         method: 'GET',
         url: 'http://sweetrides.me/get_cars',
         headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
      });
   }
});

sweatRidesApp.controller("carsTableCtrl", function($scope,$location,CarData, dataService) {
   $scope.sortType     = ''; // set the default sort type
   $scope.sortReverse  = false;  // set the default sort order
   $scope.goToCar= function(car) {
      CarData.set(car);
      $scope.selectedItem = car;
      $location.path("/car_"+car.id);
   };
   $scope.cars =null;
   dataService.getData().then(function(response) {
      $scope.cars = response.data;
   });
});

sweatRidesApp.controller("aboutCtrl", ['$scope','$http',function($scope,$http) {
   $scope.message = "ABOUT";
   $scope.runUnitTests = function() {
      $scope.unitTestOutput = "Running unit tests";
      $http.get('/unit_tests').then(function(result) {
         return result.data
      }).then(function(output) {
         $scope.unitTestOutput = output.output;
      });
   }
}]);

sweatRidesApp.controller("homeCtrl", ['$scope',function($scope) {
   $scope.message = "HOME";
}]);

sweatRidesApp.factory('ManData', function() {
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

sweatRidesApp.factory('CarData', function() {
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
