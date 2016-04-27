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
        when("/engines", {
            templateUrl: "../partials/enginesTable.html",
            controller: "enginesTableCtrl"
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
         }).
         when("/engine_:id", {
            templateUrl: "../partials/engine.html",
            controller: "engineCtrl"
         })
         .when('/search', {
            templateUrl: '../partials/search.html',
            controller: 'searchCtrl',
         })
         .when("/new_:id", {
            templateUrl: '../partials/new.html',
            controller: 'newCtrl',
         })
         .otherwise({redirectTo: '/home'});
}]);

sweatRidesApp.service('dataService2', function($http) {
   delete $http.defaults.headers.common['X-Requested-With'];
   this.getData = function() {
       // $http() returns a $promise that we can add handlers with .then()
      return $http({
         method: 'GET',
         //url: 'http://sweetrides.me/get_manufacturers',
	  url: '/get_manufacturers',
         headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
      });
   };
});

sweatRidesApp.service('dataService5', function($http) {
   delete $http.defaults.headers.common['X-Requested-With'];
   this.getData = function() {
       console.log("dataservice5");
       // $http() returns a $promise that we can add handlers with .then()
       var id = Math.floor(Math.random() * (150 - 0));
      return $http({
         method: 'GET',
         //url: 'http://sweetrides.me/get_manufacturers',
	  url: '/get_restaurant/'+id,
         headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
      });
   };
});

sweatRidesApp.service('dataService6', function($http) {
   delete $http.defaults.headers.common['X-Requested-With'];
   this.getData = function() {
       console.log("dataservice6");
       // $http() returns a $promise that we can add handlers with .then()
       var id = Math.floor(Math.random() * (150 - 0));
      return $http({
         method: 'GET',
         //url: 'http://sweetrides.me/get_manufacturers',
	  url: '/get_attraction/'+id,
         headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
      });
   };
});

sweatRidesApp.service('dataService7', function($http) {
   delete $http.defaults.headers.common['X-Requested-With'];
   this.getData = function(id) {
       console.log("dataService7");
       // $http() returns a $promise that we can add handlers with .then()
      return $http({
         method: 'GET',
         //url: 'http://sweetrides.me/get_manufacturers',
	  url: '/get_city/'+id,
         headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
      });
   };
});



/*
sweatRidesApp.service('dataService7', function($http) {
   delete $http.defaults.headers.common['X-Requested-With'];
   this.getData = function() {
       console.log("dataservice7");
       // $http() returns a $promise that we can add handlers with .then()
       var id = Math.floor(Math.random() * (150 - 0));
      return $http({
         method: 'GET',
         //url: 'http://sweetrides.me/get_manufacturers',
    url: '/get_restaurant/'+id,
         headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
      });
   };
});*/



sweatRidesApp.service('dataService4', function($http) {
   delete $http.defaults.headers.common['X-Requested-With'];
   this.getData = function(q) {
       // $http() returns a $promise that we can add handlers with .then()
      return $http({
         method: 'GET',
         //url: 'http://sweetrides.me/get_manufacturers',
	  url: '/search/' + q,
         headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
      });
   };
});

sweatRidesApp.service('dataService3', function($http) {
   delete $http.defaults.headers.common['X-Requested-With'];
   this.getData = function() {
       // $http() returns a $promise that we can add handlers with .then()
      return $http({
         method: 'GET',
         url: '/get_engines',
         headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
      });
   };
});

sweatRidesApp.controller("manTableCtrl", function($scope,$location,ManData, CityData,dataService,dataService2, dataService5, dataService6, dataService7) {
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
   dataService.getData().then(function(response) {
       $scope.cars = response.data;
   });
    dataService5.getData().then(function(response) {
	$scope.restaurant = response.data;
    });
    dataService6.getData().then(function(response) {
	$scope.attraction = response.data;
    });
  
  $scope.goToCity = function(city_id){
    dataService7.getData(city_id).then(function(response){
      CityData.set(response.data);
    })
    $location.path("new_"+city_id);
  }
});

sweatRidesApp.controller("carsTableCtrl", function($scope,$location,CarData,CityData, dataService, dataService5, dataService6, dataService7) {
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
    dataService5.getData().then(function(response) {
	$scope.restaurant = response.data;
    });
    dataService6.getData().then(function(response) {
	$scope.attraction = response.data;
    });
  $scope.goToCity = function(city_id){
    dataService7.getData(city_id).then(function(response){
      CityData.set(response.data);
    })
    $location.path("new_"+city_id);
  }
});

sweatRidesApp.controller("enginesTableCtrl", function($scope,$location,EngineData,CityData, dataService3, dataService5, dataService6, dataService7) {
   $scope.sortType     = ''; // set the default sort type
   $scope.sortReverse  = false;  // set the default sort order
   $scope.goToEngine= function(engine) {
      EngineData.set(engine);
      $scope.selectedItem = engine;
      $location.path("/engine_"+engine.id);
   };
   $scope.engines =null;
   dataService3.getData().then(function(response) {
      $scope.engines = response.data;
   });
    dataService5.getData().then(function(response) {
	$scope.restaurant = response.data;
    });
    dataService6.getData().then(function(response) {
	$scope.attraction = response.data;
    });
  $scope.goToCity = function(city_id){
    dataService7.getData(city_id).then(function(response){
      CityData.set(response.data);
    })
    $location.path("new_"+city_id);
  }
});

sweatRidesApp.controller("manCtrl", function($scope,$location,ManData, dataService, dataService3, CarData, EngineData){
    console.log("!!!!!!!!!!!!!!");
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
    $scope.goToEngine= function(engine){
       EngineData.set(engine);
       $scope.selectedItem = engine;
       $location.path("/engine_"+engine.id);
    };
    dataService3.getData().then(function(response) {
       $scope.engines = response.data;
    });
    $scope.random = function(){
      return 0.5 - Math.random();
    }
});

sweatRidesApp.controller("carCtrl",function($scope,$location,CarData, dataService2, dataService3, ManData,EngineData){
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
    $scope.goToEngine= function(engine) {
       EngineData.set(engine);
       $scope.selectedItem = engine;
       $location.path("/engine_"+engine.id);
    };
    dataService3.getData().then(function(response) {
       $scope.engines = response.data;
    });
});

sweatRidesApp.controller("engineCtrl",function($scope,$location,EngineData, dataService, dataService2, ManData,CarData){
    $scope.message="Engine Message";
    $scope.engine = EngineData.get();
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
    $scope.goToCar= function(car) {
      CarData.set(car);
      $scope.selectedItem = car;
      $location.path("/car_"+car.id);
    };
    dataService.getData().then(function(response) {
      $scope.cars = response.data;
    });
});

sweatRidesApp.controller("homeCtrl", function($scope,$location,$rootScope) {
   $scope.message = "HOME";

});

sweatRidesApp.controller("indexCtrl", function($scope,$location,$rootScope, $route, dataService4) {
   $scope.message = "INDEX";
    $scope.search = function(){
	

	dataService4.getData($scope.query).then(function(response) {
	    $rootScope.searchQuery = response.data;
	    
	    $rootScope.showCars = 0;
	    $rootScope.showMans = 0;
	    $rootScope.showEngines = 0;
	    for (i in $rootScope.searchQuery.cars){
		$rootScope.showCars = 1;
		break;
	    }
	    for (i in $rootScope.searchQuery.manufacturers){
		$rootScope.showMans = 1;
		break;
	    }
	    for (i in $rootScope.searchQuery.engines){
		$rootScope.showEngines = 1;
		break;
	    }
	});

	console.log("indexControl");
	console.log($rootScope.searchQuery);




	if ($location.url() == '/search'){
	    console.log('aaaaa')
	    $route.reload();
	}
	else {
	    console.log('bbbbb')
            $location.path("/search"); // path not hash
	}
    };
});

sweatRidesApp.controller("searchCtrl", function($scope,$rootScope,$location,dataService,dataService2,dataService3,ManData,CarData,EngineData) {
    console.log("getting here");
    $scope.goToMan= function(man){
      ManData.set(man);
      $scope.selectedItem = man;
      $location.path("/man_"+man.id);
    };
    $scope.goToCar= function(car) {
      CarData.set(car);
      $scope.selectedItem = car;
      $location.path("/car_"+car.id);
    };
    $scope.goToEngine= function(engine) {
       EngineData.set(engine);
       $scope.selectedItem = engine;
       $location.path("/engine_"+engine.id);
    };
    $scope.contains=function(list,i){
      console.log(list);
      for(var v=0; v <list.length;v++){
        if (list[v] == i){
          return true;
        }
      }
      return false;
    }

});

sweatRidesApp.controller("newCtrl", function($scope,$location, CityData) {
   $scope.sortType     = ''; // set the default sort type
   $scope.sortReverse  = false;  // set the default sort order
   $scope.cities = CityData.get();
   /*
   $scope.goToCity= function(city) {
      CityData.set(city);
      $scope.selectedItem = city;
      $location.path("/city_"+city.id);
   };
   $scope.cities =null;
    dataService7.getData().then(function(response) {
  $scope.cities = response.data;
    });
*/
});

sweatRidesApp.service('dataService', function($http) {
   delete $http.defaults.headers.common['X-Requested-With'];
   this.getData = function() {
      // $http() returns a $promise that we can add handlers with .then()
      return $http({
         method: 'GET',
         //url: 'http://sweetrides.me/get_cars',
	  url: '/get_cars',
         headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
      });
   }
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

sweatRidesApp.factory('EngineData', function() {
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

sweatRidesApp.factory('CityData', function() {
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
