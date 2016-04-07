angular.module('sortApp', ['angularUtils.directives.dirPagination'])

.controller('mainController', function($scope) {
  $scope.sortType     = ''; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order

  $scope.sortTypeMan     = ''; // set the default sort type
  $scope.sortReverseMan  = false;  // set the default sort order
  
  // create the list of sushi rolls 
  $scope.cars = [
    { id:1, img: 'img/cars/aventador.jpg', make: 'Lamborghini' , model:'Aventador', year:2015,price: 399500,safety: 4, dataTarget:'#carsModal1'},
    { id:2, img: 'img/cars/berlinetta.jpg', make: 'Ferrari' , model:'Berlinetta', year:2015,price: 199800,safety: 4, dataTarget:'#carsModal5'},
    { id:3, img: 'img/cars/mclarenp1.jpg', make: 'McLaren' , model:'McLaren P1', year:2015,price: 1030800,safety: 3, dataTarget:'#carsModal10'},
    { id:4, img: 'img/cars/aventador.jpg', make: 'Lamborghini' , model:'Aventador', year:2015,price: 399500,safety: 4, dataTarget:'#carsModal1'},
    { id:5, img: 'img/cars/berlinetta.jpg', make: 'Ferrari' , model:'Berlinetta', year:2015,price: 199800,safety: 4, dataTarget:'#carsModal5'},
    { id:6, img: 'img/cars/mclarenp1.jpg', make: 'McLaren' , model:'McLaren P1', year:2015,price: 1030800,safety: 3, dataTarget:'#carsModal10'},
    { id:7, img: 'img/cars/aventador.jpg', make: 'Lamborghini' , model:'Aventador', year:2015,price: 399500,safety: 4, dataTarget:'#carsModal1'},
    { id:8, img: 'img/cars/berlinetta.jpg', make: 'Ferrari' , model:'Berlinetta', year:2015,price: 199800,safety: 4, dataTarget:'#carsModal5'},
    { id:9, img: 'img/cars/mclarenp1.jpg', make: 'McLaren' , model:'McLaren P1', year:2015,price: 1030800,safety: 3, dataTarget:'#carsModal10'},
    { id:10, img: 'img/cars/aventador.jpg', make: 'Lamborghini' , model:'Aventador', year:2015,price: 399500,safety: 4, dataTarget:'#carsModal1'},
    { id:11, img: 'img/cars/berlinetta.jpg', make: 'Ferrari' , model:'Berlinetta', year:2015,price: 199800,safety: 4, dataTarget:'#carsModal5'},
    { id:12, img: 'img/cars/mclarenp1.jpg', make: 'McLaren' , model:'McLaren P1', year:2015,price: 1030800,safety: 3, dataTarget:'#carsModal10'},
    { id:13, img: 'img/cars/aventador.jpg', make: 'Lamborghini' , model:'Aventador', year:2015,price: 399500,safety: 4, dataTarget:'#carsModal1'},
    { id:14, img: 'img/cars/berlinetta.jpg', make: 'Ferrari' , model:'Berlinetta', year:2015,price: 199800,safety: 4, dataTarget:'#carsModal5'},
    { id:15, img: 'img/cars/mclarenp1.jpg', make: 'McLaren' , model:'McLaren P1', year:2015,price: 1030800,safety: 3, dataTarget:'#carsModal10'},
    { id:16, img: 'img/cars/aventador.jpg', make: 'Lamborghini' , model:'Aventador', year:2015,price: 399500,safety: 4, dataTarget:'#carsModal1'},
    { id:17, img: 'img/cars/berlinetta.jpg', make: 'Ferrari' , model:'Berlinetta', year:2015,price: 199800,safety: 4, dataTarget:'#carsModal5'},
    { id:18, img: 'img/cars/mclarenp1.jpg', make: 'McLaren' , model:'McLaren P1', year:2015,price: 1030800,safety: 3, dataTarget:'#carsModal10'},
    { id:19, img: 'img/cars/aventador.jpg', make: 'Lamborghini' , model:'Aventador', year:2015,price: 399500,safety: 4, dataTarget:'#carsModal1'},
    { id:20, img: 'img/cars/berlinetta.jpg', make: 'Ferrari' , model:'Berlinetta', year:2015,price: 199800,safety: 4, dataTarget:'#carsModal5'},
    { id:21, img: 'img/cars/mclarenp1.jpg', make: 'McLaren' , model:'McLaren P1', year:2015,price: 1030800,safety: 3, dataTarget:'#carsModal10'},
    { id:22, img: 'img/cars/aventador.jpg', make: 'Lamborghini' , model:'Aventador', year:2015,price: 399500,safety: 4, dataTarget:'#carsModal1'},
    { id:23, img: 'img/cars/berlinetta.jpg', make: 'Ferrari' , model:'Berlinetta', year:2015,price: 199800,safety: 4, dataTarget:'#carsModal5'},
    { id:24, img: 'img/cars/mclarenp1.jpg', make: 'McLaren' , model:'McLaren P1', year:2015,price: 1030800,safety: 3, dataTarget:'#carsModal10'},
    { id:25, img: 'img/cars/aventador.jpg', make: 'Lamborghini' , model:'Aventador', year:2015,price: 399500,safety: 4, dataTarget:'#carsModal1'},
    { id:26, img: 'img/cars/berlinetta.jpg', make: 'Ferrari' , model:'Berlinetta', year:2015,price: 199800,safety: 4, dataTarget:'#carsModal5'},
    { id:27, img: 'img/cars/mclarenp1.jpg', make: 'McLaren' , model:'McLaren P1', year:2015,price: 1030800,safety: 3, dataTarget:'#carsModal10'},
    { id:28, img: 'img/cars/aventador.jpg', make: 'Lamborghini' , model:'Aventador', year:2015,price: 399500,safety: 4, dataTarget:'#carsModal1'},
    { id:29, img: 'img/cars/berlinetta.jpg', make: 'Ferrari' , model:'Berlinetta', year:2015,price: 199800,safety: 4, dataTarget:'#carsModal5'},
    { id:30, img: 'img/cars/mclarenp1.jpg', make: 'McLaren' , model:'McLaren P1', year:2015,price: 1030800,safety: 3, dataTarget:'#carsModal10'},
    { id:31, img: 'img/cars/mclarenp1.jpg', make: 'McLaren' , model:'McLaren P1', year:2015,price: 1030800,safety: 3, dataTarget:'#carsModal10'},
  ];
  $scope.manufacturers = [
    { id:1, img: 'img/manufacturers/ferrari.jpg', name: 'Ferrari', country: 'Italy' , avgSafety: 3, avgPrice: 298000, modelsNum: 9, dataTarget:'#carsModal7'},
    { id:2, img: 'img/manufacturers/lamborghini.jpg', name: 'Lamborghini', country: 'Italy' , avgSafety: 3, avgPrice: 250000, modelsNum: 6, dataTarget:'#carsModal8'},
    { id:3, img: 'img/manufacturers/mclaren.jpg', name: 'McLaren', country: 'Great Britain' , avgSafety: 4, avgPrice: 265000, modelsNum: 10, dataTarget:'#carsModal9'},
    
  ];
  
});
