"USE STRICT";
app.controller("barraCtrl", function($scope, $location){
	$scope.mostrarVoltar = false;
	$scope.mostrarLigar = false;
	$scope.mostrarMenu = false;

	$scope.mostra = function(){
	
		switch($location.path()) {
			case '/':
				$scope.mostrarVoltar = false;
				$scope.mostrarLigar = true;
				$scope.mostrarMenu = false;
			break;
			case '/cadastrese':
				$scope.mostrarVoltar = true;
				$scope.mostrarLigar = false;
				$scope.mostrarMenu = false;
			break;
			case '/home':
				$scope.mostrarVoltar = false;
				$scope.mostrarLigar = false;
				$scope.mostrarMenu = true;
			break;
		}

	}

	$scope.trataVoltar = function(){
		switch($location.path()) {
			case '/cadastrese':
				$location.path('/');
			break;
		}
	}
});