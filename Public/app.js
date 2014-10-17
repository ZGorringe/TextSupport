var app = angular.module("Text Support", ["firebase", "ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "/views/homeTemplate.html",
		controller: "mainCtrl"
	}).when("/support", {
		templateUrl: "/views/supportTemplate.html",
		controller: "supportCtrl"
	}).otherwise({
		redirectTo: "/views/homeTemplate.html"
	})
})