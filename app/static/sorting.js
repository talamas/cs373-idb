angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = ''; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order

  $scope.sortTypeMan     = ''; // set the default sort type
  $scope.sortReverseMan  = false;  // set the default sort order
  
  // create the list of sushi rolls 
  $scope.cars = [
    { img: 'img/cars/aventador.jpg', makeId: 123, make: 'Lamborghini' , model:'Aventador', year:2015,price: 399500,safety: 4, dataTarget:'#carsModal1'},
    { img: 'img/cars/berlinetta.jpg', makeId: 124, make: 'Ferrari' , model:'Berlinetta', year:2015,price: 199800,safety: 4, dataTarget:'#carsModal5'},
    { img: 'img/cars/mclarenp1.jpg', makeId: 125, make: 'McLaren' , model:'McLaren P1', year:2015,price: 1030800,safety: 3, dataTarget:'#carsModal10'},
  ];
  $scope.manufacturers = [
    { img: 'img/manufacturers/ferrari.jpg', name: 'Ferrari', country: 'Italy' , avgSafety: 3, avgPrice: 298000, modelsNum: 9, dataTarget:'#carsModal7'},
    { img: 'img/manufacturers/lamborghini.jpg', name: 'Lamborghini', country: 'Italy' , avgSafety: 3, avgPrice: 250000, modelsNum: 6, dataTarget:'#carsModal8'},
    { img: 'img/manufacturers/mclaren.jpg', name: 'McLaren', country: 'Great Britain' , avgSafety: 4, avgPrice: 265000, modelsNum: 10, dataTarget:'#carsModal9'},
    
  ];
  
});
