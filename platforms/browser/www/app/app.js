var app = angular.module("corleones", ["ngRoute"]);

app.config(function($routeProvider){

	$routeProvider.when("/", {
		controller : "loginCtrl",
		templateUrl : "app/views/login.html"
	}).
	when("/cadastrese", {
		templateUrl : "app/views/cadastrese.html"
	}).
	when("/home", {
		templateUrl : "app/views/home.html",
		controller  : "homeCtrl"
	});

	$routeProvider.otherwise({redirectTo:"/"});

});