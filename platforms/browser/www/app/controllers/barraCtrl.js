"USE STRICT";
app.controller("barraCtrl", function($scope, $location){
	$scope.mostrarVoltar = false;
	$scope.mostrarLigar = false;

	$scope.mostra = function(){
	
		switch($location.path()) {
			case '/':
				$scope.mostrarVoltar = false;
				$scope.mostrarLigar = true;
			break;
			case '/cadastrese':
				$scope.mostrarVoltar = true;
				$scope.mostrarLigar = false;
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