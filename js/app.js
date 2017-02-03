var app = angular.module('portalApp', ['ngAnimate']);

app.controller('MainController', function($scope, $http) {
	$scope.selectedButton = true;
	$scope.class = "moveleft";
	$scope.selectedPanel = true;

});


