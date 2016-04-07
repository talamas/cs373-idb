angular.module('sweatRidesApp',['ngRoute'])
	.config([function ($routeProvider){
		$routeProvider
			.when("/manufacturers",{
				tempalteUrl:"app/static/partials/manufactuersTable.html",
				controller:"manTableCtrl"
			})
			.when("/cars",{
				tempalteUrl:"app/static/partials/carsTable.html",
				controller:"carTableCtrl"
			})
			.when("/about",{
				tempalteUrl:"app/static/partials/about.html",
				controller:"aboutCtrl"
			})
	}]