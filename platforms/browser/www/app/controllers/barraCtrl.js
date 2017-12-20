"USE STRICT";
app.controller("barraCtrl", function($scope, $location){
	$scope.mostrarVoltar = false;
	$scope.mostrarDireita = false;

	$scope.mostra = function(){
		if($location.path() != '/'){
			$scope.mostrarVoltar = true;
			$scope.mostrarDireita = false;
		}else{
			$scope.mostrarVoltar = false;
			$scope.mostrarDireita = true;
		}
	}

	$scope.trataVoltar = function(){
		switch($location.path()) {
			case '/cadastrese':
				$location.path('/');
			break;
			case '/home':
				$location.path('/');
			break;
		} 
	}
});