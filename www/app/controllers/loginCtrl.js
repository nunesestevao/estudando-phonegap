"USE STRICT";
app.controller("loginCtrl", function($scope, $location, $http){

	$scope.mostraErro = false;
	
	$scope.login = function(){

		$http({
			method: 'POST',
			url: 'http://estevaonunes.com.br:3000/api/usuarios/login',
			data: $scope.user
		}).then(function successCallback(response) {
			
			if(response.data[0].erro){
				$scope.mostraErro = true;
			}else{
				$location.path('/home');
			}

		}, function errorCallback(response) {
			console.log(response);
		});

	}

});