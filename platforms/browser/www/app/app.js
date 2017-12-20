var app = angular.module("corleones", ["ngRoute"]);

app.config(function($routeProvider){

	$routeProvider.when("/", {
		templateUrl : "app/views/login.html"
	}).
	when("/cadastrese", {
		templateUrl : "app/views/cadastrese.html"
	});

});

app.run(function($rootScope, $location) {
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        
    });
});