var app = angular.module('catsList' );

app.component('cats', {
	templateUrl: '/templates/adoptCat.html'
});
app.controller('catsCtrl', function ($scope, $http,$window){
	var getCats = function() {
		$http.get("/cats")
		.then(function successCallback(response) {
			$scope.cats = response.data;
    }, function errorCallback(response) {
        $scope.error = response.statusText;
    });

	};
	getCats();

	$scope.addCats=function() {
		$http.post("/cats",{catName:$scope.catName,ownerEmail:$scope.ownerEmail,imageUrl:$scope.imageUrl,adoptionMessage:$scope.adoptionMessage} 
			).then(function successCallback(response) {
				console.log('success');
           }, function errorCallback(response) {
        $scope.error = response.statusText;
    });


		}
	})	

export default app;	

