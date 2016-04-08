/// <reference path="angular.min.js" />


angular.module("sweatRidesApp", ["ngRoute","angularUtils.directives.dirPagination"])
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
	}])


    .controller("manTableCtrl", ['$scope','$location','ManData',function($scope,$location,ManData) {
	$scope.sortTypeMan     = ''; // set the default sort type
	$scope.sortReverseMan  = false;  // set the default sort order
	$scope.message="David";
   $scope.goToItem= function(man){
         ManData.set(man);
         $scope.selectedItem = man;
         $location.path("/man_"+man.id);
         $scope.apply();
      };
   $scope.manufacturers = [ { "num_models":3, "id":1, "max_car_id":104, "name":"chrysler", "avg_horsepower":291.3333333333333, "avg_price":32971.666666666664, "img_url":"http://www.carlogos.org/uploads/car-logos/Chrysler-logo-1.jpg" }, 
							{ "num_models":8, "id":2, "max_car_id":152, "name":"honda", "avg_horsepower":190.625, "avg_price":27965.0, "img_url":"http://www.carlogos.org/uploads/car-logos/Honda-logo-1.jpg" }, 
							{ "num_models":18, "id":3, "max_car_id":270, "name":"mercedes-benz", "avg_horsepower":333.94444444444446, "avg_price":80681.94444444444, "img_url":"http://www.carlogos.org/uploads/car-logos/Mercedes-Benz-logo-1.jpg" }, 
							{ "num_models":6, "id":4, "max_car_id":307, "name":"ram", "avg_horsepower":299.8333333333333, "avg_price":31406.666666666668, "img_url":"http://www.carlogos.org/uploads/car-logos/Ram-logo-1.jpg" }, 
							{ "num_models":19, "id":5, "max_car_id":125, "name":"ford", "avg_horsepower":281.2631578947368, "avg_price":34998.68421052631, "img_url":"http://www.carlogos.org/uploads/car-logos/Ford-logo-1.jpg" }, 
							{ "num_models":9, "id":6, "max_car_id":146, "name":"gmc", "avg_horsepower":292.3333333333333, "avg_price":40609.444444444445, "img_url":"http://www.carlogos.org/uploads/car-logos/Gmc-logo-1.jpg" }, 
							{ "num_models":22, "id":7, "max_car_id":21, "name":"audi", "avg_horsepower":340.59090909090907, "avg_price":66631.81818181818, "img_url":"http://www.carlogos.org/uploads/car-logos/Audi-logo-1.jpg" }, 
							{ "num_models":7, "id":8, "max_car_id":330, "name":"subaru", "avg_horsepower":192.14285714285714, "avg_price":27159.285714285714, "img_url":"http://www.carlogos.org/uploads/car-logos/Subaru-logo-1.jpg" }, 
							{ "num_models":6, "id":9, "max_car_id":315, "name":"rolls-royce", "avg_horsepower":518.1666666666666, "avg_price":394858.3333333333, "img_url":"http://www.carlogos.org/uploads/car-logos/Rolls-Royce-logo-1.jpg" }, 
							{ "num_models":8, "id":10, "max_car_id":301, "name":"porsche", "avg_horsepower":475.25, "avg_price":203787.5, "img_url":"http://www.carlogos.org/uploads/car-logos/Porsche-logo-1.jpg" }, 
							{ "num_models":31, "id":11, "max_car_id":64, "name":"bmw", "avg_horsepower":379.2258064516129, "avg_price":74501.6129032258, "img_url":"http://www.carlogos.org/uploads/car-logos/Bmw-logo-1.jpg" }, 
							{ "num_models":7, "id":12, "max_car_id":371, "name":"volvo", "avg_horsepower":285.2857142857143, "avg_price":45967.857142857145, "img_url":"http://www.carlogos.org/uploads/car-logos/Volvo-logo-1.jpg" }, 
							{ "num_models":5, "id":13, "max_car_id":236, "name":"lincoln", "avg_horsepower":324.6, "avg_price":45836.0, "img_url":"http://www.carlogos.org/uploads/car-logos/Lincoln-logo-1.jpg" }, 
							{ "num_models":4, "id":14, "max_car_id":245, "name":"maserati", "avg_horsepower":444.0, "avg_price":139934.0, "img_url":"http://www.carlogos.org/uploads/car-logos/Maserati-logo-1.jpg" }, 
							{ "num_models":4, "id":15, "max_car_id":3, "name":"acura", "avg_horsepower":286.75, "avg_price":45752.5, "img_url":"http://www.carlogos.org/uploads/car-logos/Acura-logo-1.jpg" },
							{ "num_models":2, "id":16, "max_car_id":254, "name":"mclaren", "avg_horsepower":641.0, "avg_price":272862.5, "img_url":"http://www.carlogos.org/uploads/car-logos/Mclaren-logo-1.jpg" }, 
							{ "num_models":8, "id":17, "max_car_id":177, "name":"infiniti", "avg_horsepower":311.375, "avg_price":45612.5, "img_url":"http://www.carlogos.org/uploads/car-logos/Infiniti-logo-1.jpg" }, 
							{ "num_models":3, "id":18, "max_car_id":115, "name":"fiat", "avg_horsepower":158.33333333333334, "avg_price":24535.0, "img_url":"http://www.carlogos.org/uploads/car-logos/Fiat-logo-1.jpg" }, 
							{ "num_models":6, "id":19, "max_car_id":319, "name":"scion", "avg_horsepower":145.66666666666666, "avg_price":20232.5, "img_url":"http://www.carlogos.org/uploads/car-logos/Scion-logo-1.jpg" }, 
							{ "num_models":7, "id":20, "max_car_id":112, "name":"dodge", "avg_horsepower":352.14285714285717, "avg_price":42466.42857142857, "img_url":"http://www.carlogos.org/uploads/car-logos/Dodge-logo-1.jpg" }, 
							{ "num_models":3, "id":21, "max_car_id":67, "name":"bentley", "avg_horsepower":540.3333333333334, "avg_price":235800.0, "img_url":"http://www.carlogos.org/uploads/car-logos/Bentley-logo-1.jpg" }, 
							{ "num_models":5, "id":22, "max_car_id":11, "name":"aston-martin", "avg_horsepower":531.0, "avg_price":199819.0, "img_url":"http://www.carlogos.org/uploads/car-logos/Aston-Martin-logo-1.jpg" }, 
							{ "num_models":19, "id":23, "max_car_id":100, "name":"chevrolet", "avg_horsepower":250.8421052631579, "avg_price":33572.36842105263, "img_url":"http://www.carlogos.org/uploads/car-logos/Chevrolet-logo-1.jpg" }, 
							{ "num_models":6, "id":24, "max_car_id":206, "name":"land-rover", "avg_horsepower":304.0, "avg_price":60779.166666666664, "img_url":"http://www.carlogos.org/uploads/car-logos/Land-Rover-logo-1.jpg" }, 
							{ "num_models":7, "id":25, "max_car_id":274, "name":"mitsubishi", "avg_horsepower":152.14285714285714, "avg_price":23680.714285714286, "img_url":"http://www.carlogos.org/uploads/car-logos/Mitsubishi-logo-1.jpg" }, 
							{ "num_models":12, "id":26, "max_car_id":363, "name":"volkswagen", "avg_horsepower":203.08333333333334, "avg_price":29929.583333333332, "img_url":"http://www.carlogos.org/uploads/car-logos/Volkswagen-logo-1.jpg" }, 
							{ "num_models":21, "id":27, "max_car_id":339, "name":"toyota", "avg_horsepower":209.23809523809524, "avg_price":36709.76190476191, "img_url":"http://www.carlogos.org/uploads/car-logos/Toyota-logo-1.jpg" }, 
							{ "num_models":6, "id":28, "max_car_id":187, "name":"jeep", "avg_horsepower":239.83333333333334, "avg_price":33440.833333333336, "img_url":"http://www.carlogos.org/uploads/car-logos/Jeep-logo-1.jpg" }, 
							{ "num_models":14, "id":29, "max_car_id":160, "name":"hyundai", "avg_horsepower":246.5, "avg_price":32676.428571428572, "img_url":"http://www.carlogos.org/uploads/car-logos/Hyundai-logo-1.jpg" }, 
							{ "num_models":13, "id":30, "max_car_id":76, "name":"cadillac", "avg_horsepower":372.15384615384613, "avg_price":61818.46153846154, "img_url":"http://www.carlogos.org/uploads/car-logos/Cadillac-logo-1.jpg" }, 
							{ "num_models":2, "id":31, "max_car_id":199, "name":"lamborghini", "avg_horsepower":665.0, "avg_price":393025.0, "img_url":"http://www.carlogos.org/uploads/car-logos/Lamborghini-logo-1.jpg" }, 
							{ "num_models":25, "id":32, "max_car_id":222, "name":"lexus", "avg_horsepower":290.32, "avg_price":52488.2, "img_url":"http://www.carlogos.org/uploads/car-logos/Lexus-logo-1.jpg" }, 
							{ "num_models":2, "id":33, "max_car_id":6, "name":"alfa-romeo", "avg_horsepower":237.0, "avg_price":59900.0, "img_url":"http://www.carlogos.org/uploads/car-logos/Alfa-Romeo-logo-1.jpg" }, 
							{ "num_models":6, "id":34, "max_car_id":242, "name":"mini", "avg_horsepower":154.33333333333334, "avg_price":27158.333333333332, "img_url":"http://www.carlogos.org/uploads/car-logos/Mini-logo-1.jpg" }, 
							{ "num_models":9, "id":35, "max_car_id":191, "name":"kia", "avg_horsepower":216.11111111111111, "avg_price":28725.555555555555, "img_url":"http://www.carlogos.org/uploads/car-logos/Kia-logo-1.jpg" }, 
							{ "num_models":4, "id":36, "max_car_id":118, "name":"ferrari", "avg_horsepower":633.0, "avg_price":276428.0, "img_url":"http://www.carlogos.org/uploads/car-logos/Ferrari-logo-1.jpg" }, 
							{ "num_models":6, "id":37, "max_car_id":251, "name":"mazda", "avg_horsepower":163.5, "avg_price":22278.333333333332, "img_url":"http://www.carlogos.org/uploads/car-logos/Mazda-logo-1.jpg" }, 
							{ "num_models":19, "id":38, "max_car_id":283, "name":"nissan", "avg_horsepower":251.21052631578948, "avg_price":36314.73684210526, "img_url":"http://www.carlogos.org/uploads/car-logos/Nissan-logo-1.jpg" }, 
							{ "num_models":3, "id":39, "max_car_id":68, "name":"buick", "avg_horsepower":236.33333333333334, "avg_price":31050.0, "img_url":"http://www.carlogos.org/uploads/car-logos/Buick-logo-1.jpg" }, 
							{ "num_models":6, "id":40, "max_car_id":183, "name":"jaguar", "avg_horsepower":327.5, "avg_price":63783.333333333336, "img_url":"http://www.carlogos.org/uploads/car-logos/Jaguar-logo-1.jpg" }];
	}])
	.controller("manCtrl",['$scope','$location','ManData',function($scope,$location,ManData){
      $scope.man = ManData.get();
   }])
   .controller("carCtrl",['$scope','$location','CarData',function($scope,$location,CarData){
      $scope.man = CarData.get();
   }])
	.controller("carsTableCtrl", ['$scope', function($scope) {
	    $scope.sortType     = ''; // set the default sort type
	    $scope.sortReverse  = false;  // set the default sort order
	    $scope.cars = [  
   {  
      "year":2016,
      "id":1,
      "horsepower":201,
      "make":"acura",
      "model":"ilx",
      "price":31890.0,
      "img_url":"http://ts2.mm.bing.net/th?id=OIP.M7656c6f6aaa4d51c3ddee4b1192adeeeH0&pid=15.1"
   },
   {  
      "year":2016,
      "id":2,
      "horsepower":279,
      "make":"acura",
      "model":"rdx",
      "price":40370.0,
      "img_url":"http://ts4.mm.bing.net/th?id=OIP.M9e8c70aff2632ee58fc97806bf5b83ffH0&pid=15.1"
   },
   {  
      "year":2016,
      "id":3,
      "horsepower":377,
      "make":"acura",
      "model":"rlx",
      "price":65950.0,
      "img_url":"http://ts2.mm.bing.net/th?id=OIP.Mab377a39ce357ff2b18160e770e8822cH0&pid=15.1"
   },
   {  
      "year":2016,
      "id":4,
      "horsepower":290,
      "make":"acura",
      "model":"tlx",
      "price":44800.0,
      "img_url":"http://ts2.mm.bing.net/th?id=OIP.M7027fde17ca39f879ff85c98171367afH0&pid=15.1"
   },
   {  
      "year":2016,
      "id":5,
      "horsepower":237,
      "make":"alfa-romeo",
      "model":"4c",
      "price":55900.0,
      "img_url":"http://ts2.mm.bing.net/th?id=OIP.M8a3a74ca54214aa8f59f312b20d67407H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":6,
      "horsepower":237,
      "make":"alfa-romeo",
      "model":"4c-spider",
      "price":63900.0,
      "img_url":"http://ts1.mm.bing.net/th?id=OIP.Mc2a03f245da8da7c5b9255ecda1c234co0&pid=15.1"
   },
   {  
      "year":2016,
      "id":7,
      "horsepower":540,
      "make":"aston-martin",
      "model":"db9-gt",
      "price":198250.0,
      "img_url":"http://ts2.mm.bing.net/th?id=OIP.M6ea50edfaf424f185331d4840b695e73o0&pid=15.1"
   },
   {  
      "year":2016,
      "id":8,
      "horsepower":552,
      "make":"aston-martin",
      "model":"rapide-s",
      "price":206000.0,
      "img_url":"http://ts2.mm.bing.net/th?id=OIP.M8405c51f97d104b4eb7cdfec4e80bb5bo0&pid=15.1"
   },
   {  
      "year":2016,
      "id":9,
      "horsepower":565,
      "make":"aston-martin",
      "model":"v12-vantage-s",
      "price":198195.0,
      "img_url":"http://ts3.mm.bing.net/th?id=OIP.M37dc9b347ed530569b2063f0988c9a0fH0&pid=15.1"
   },
   {  
      "year":2016,
      "id":10,
      "horsepower":430,
      "make":"aston-martin",
      "model":"v8-vantage",
      "price":109000.0,
      "img_url":"http://ts3.mm.bing.net/th?id=OIP.Mb3321ac399a0b3715da3d6a7186098f5H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":11,
      "horsepower":568,
      "make":"aston-martin",
      "model":"vanquish",
      "price":287650.0,
      "img_url":"http://ts1.mm.bing.net/th?id=OIP.M4b591ff33d9cc70606ddc92e272f9365H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":12,
      "horsepower":150,
      "make":"audi",
      "model":"a3",
      "price":42050.0,
      "img_url":"http://ts2.mm.bing.net/th?id=OIP.M4fb83fa38daee899e5f9ad959228d1a2H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":13,
      "horsepower":204,
      "make":"audi",
      "model":"a3-sportback-e-tron",
      "price":46800.0,
      "img_url":"http://ts1.mm.bing.net/th?id=OIP.M8a13b36688b9093aa1aad5d463b9fccdo0&pid=15.1"
   },
   {  
      "year":2017,
      "id":14,
      "horsepower":252,
      "make":"audi",
      "model":"a4",
      "price":41100.0,
      "img_url":"http://ts4.mm.bing.net/th?id=OIP.M5f243f1b175f98760155d0a4536c6f8cH0&pid=15.1"
   },
   {  
      "year":2016,
      "id":15,
      "horsepower":252,
      "make":"audi",
      "model":"a6",
      "price":52100.0,
      "img_url":"http://ts2.mm.bing.net/th?id=OIP.M87f9a7ad73341027ed0eb94569f2425eH0&pid=15.1"
   },
   {  
      "year":2016,
      "id":16,
      "horsepower":333,
      "make":"audi",
      "model":"a7",
      "price":70950.0,
      "img_url":"http://ts2.mm.bing.net/th?id=OIP.Mf0b19510177fba1c2bfdc5997876bb2eH0&pid=15.1"
   },
   {  
      "year":2016,
      "id":17,
      "horsepower":450,
      "make":"audi",
      "model":"a8",
      "price":90500.0,
      "img_url":"http://ts4.mm.bing.net/th?id=OIP.M8b4a9d0b8bb0df22730a6ad913d8b684H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":18,
      "horsepower":200,
      "make":"audi",
      "model":"q3",
      "price":33700.0,
      "img_url":"http://ts3.mm.bing.net/th?id=OIP.M2d0b16b8ecf93f68d2d40c41719e1036H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":19,
      "horsepower":220,
      "make":"audi",
      "model":"q5",
      "price":40900.0,
      "img_url":"http://ts3.mm.bing.net/th?id=OIP.Mc096c3be6c7a745ad103236721e34867H0&pid=15.1"
   },
   {  
      "year":2017,
      "id":20,
      "horsepower":333,
      "make":"audi",
      "model":"q7",
      "price":58800.0,
      "img_url":"http://ts3.mm.bing.net/th?id=OIP.M8fecf4e177901193609112640d703547H0&pid=15.1"
   },
   {  
      "year":2017,
      "id":21,
      "horsepower":540,
      "make":"audi",
      "model":"r8",
      "price":162900.0,
      "img_url":"http://ts3.mm.bing.net/th?id=OIP.Mae0e3f2e814b5ebac8e7d27799ef6712H0&pid=15.1"
   },
   {  
      "year":2015,
      "id":22,
      "horsepower":450,
      "make":"audi",
      "model":"rs-5",
      "price":79200.0,
      "img_url":"http://ts4.mm.bing.net/th?id=OIP.M90b0d4dbe568d0df29364acb15f37114o0&pid=15.1"
   },
   {  
      "year":2016,
      "id":23,
      "horsepower":560,
      "make":"audi",
      "model":"rs-7",
      "price":108900.0,
      "img_url":"http://ts1.mm.bing.net/th?id=OIP.M9fdd8b8f93b83e51af5523f38161426fH0&pid=15.1"
   },
   {  
      "year":2016,
      "id":24,
      "horsepower":292,
      "make":"audi",
      "model":"s3",
      "price":48650.0,
      "img_url":"http://ts1.mm.bing.net/th?id=OIP.Md03aed73b14cbf9ebef7cf153c52cadaH0&pid=15.1"
   },
   {  
      "year":2016,
      "id":25,
      "horsepower":333,
      "make":"audi",
      "model":"s4",
      "price":55100.0,
      "img_url":"http://ts1.mm.bing.net/th?id=OIP.M82eb472303f4caa475f9f3a115451d3dH0&pid=15.1"
   },
   {  
      "year":2016,
      "id":26,
      "horsepower":333,
      "make":"audi",
      "model":"s5",
      "price":59350.0,
      "img_url":"http://ts3.mm.bing.net/th?id=OIP.Meb8c602b80480f662e4cd967c93de067H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":27,
      "horsepower":450,
      "make":"audi",
      "model":"s6",
      "price":75300.0,
      "img_url":"http://ts4.mm.bing.net/th?id=OIP.Mdb625c7a94be0963ec921b9290e1ea65H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":28,
      "horsepower":450,
      "make":"audi",
      "model":"s7",
      "price":82900.0,
      "img_url":"http://ts3.mm.bing.net/th?id=OIP.Mb72e959b68722453be7e89e11d1fdbeeH0&pid=15.1"
   },
   {  
      "year":2016,
      "id":29,
      "horsepower":605,
      "make":"audi",
      "model":"s8",
      "price":114900.0,
      "img_url":"http://ts3.mm.bing.net/th?id=OIP.Mb3593738cde579214af0a448ae4b84deH0&pid=15.1"
   },
   {  
      "year":2016,
      "id":30,
      "horsepower":354,
      "make":"audi",
      "model":"sq5",
      "price":60800.0,
      "img_url":"http://ts4.mm.bing.net/th?id=OIP.M1024a53f801da1942285f3d0e2721555H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":31,
      "horsepower":220,
      "make":"audi",
      "model":"tt",
      "price":46400.0,
      "img_url":"http://ts1.mm.bing.net/th?id=OIP.Me6cec521bfabe34fc8c1ad225d512093H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":32,
      "horsepower":292,
      "make":"audi",
      "model":"tts",
      "price":51900.0,
      "img_url":"http://ts3.mm.bing.net/th?id=OIP.M5af1f3cb9bc5ecd52ff48156b08ef5b0H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":33,
      "horsepower":220,
      "make":"audi",
      "model":"allroad",
      "price":42700.0,
      "img_url":"http://ts1.mm.bing.net/th?id=OIP.Me2d3d40dfdaf8d2ac389a3515466f0b9H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":34,
      "horsepower":240,
      "make":"bmw",
      "model":"2-series",
      "price":38650.0,
      "img_url":"http://ts2.mm.bing.net/th?id=OIP.M8d2ce327068244565567a1db316398a6H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":35,
      "horsepower":240,
      "make":"bmw",
      "model":"3-series",
      "price":38350.0,
      "img_url":"http://ts3.mm.bing.net/th?id=OIP.M23f6b0f90f24a3ec99fe227ef589c787H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":36,
      "horsepower":300,
      "make":"bmw",
      "model":"3-series-gran-turismo",
      "price":49200.0,
      "img_url":"http://ts2.mm.bing.net/th?id=OIP.Mc75fa0e340932e6cf464cd86e3634f67H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":37,
      "horsepower":300,
      "make":"bmw",
      "model":"4-series",
      "price":56950.0,
      "img_url":"http://ts3.mm.bing.net/th?id=OIP.M9e5565480094a5717411c0ae75bee837H0&pid=15.1"
   },
   {  
      "year":2016,
      "id":38,
      "horsepower":300,
      "make":"bmw",
      "model":"4-series-gran-coupe",
      "price":49950.0,
      "img_url":"http://ts4.mm.bing.net/th?id=OIP.M0d926544d83e5fbc63253d78424d492bo0&pid=15.1"
   },
   {  
      "year":2016,
      "id":39,
      "horsepower":443,
      "make":"bmw",
      "model":"5-series",
      "price":68600.0,
      "img_url":"http://ts2.mm.bing.net/th?id=OIP.M9bc53ff98dd6355041b33ef32b33d9e9o0&pid=15.1"
   }];
	}])
	.controller("aboutCtrl", ['$scope',function($scope) {
		$scope.message = "ABOUT";
	}])
	.controller("homeCtrl", ['$scope',function($scope) {
		$scope.message = "HOME";
	}])
   .factory('ManData', function() {
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

      })
   .factory('CanData', function() {
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

      })





