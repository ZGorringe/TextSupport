var app = angular.module("Text Support");

app.controller("supportCtrl", function($scope, $firebase, mainService) {
	var firebaseUrl = "https://text-support-zg.firebaseIO.com/";

	$scope.tickets = $firebase(new Firebase(firebaseUrl + 'numbers/')).$asArray();
	console.log($scope.tickets);
})