/// <reference path="angular.min.js" />

var lax = angular.module('sweatRidesApp', ['ngRoute']);

lax.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
            when('/manufacturers', {
                templateUrl: '/app/static/partials/manufacturersTable.html',
                controller: 'manTableCtrl'
            }).
            when('/cars', {
                templateUrl: '/app/static/partials/carsTable.html',
                controller: 'carsTableCtrl'
            }).
}]);

lax.controller('manTableCtrl', function($scope) {
$scope.message = 'This is Add new man info';
});


lax.controller('carsTableCtrl', function($scope) {
$scope.message = 'This is car info';
});