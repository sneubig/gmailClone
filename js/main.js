angular.module('myApp', [
	'ngRoute'
]).config(function ($routeProvider){
	'use strict';
	// configure urls
	$routeProvider
	  // inbox route
		.when('/inbox', {
			templateUrl: 'views/inbox.html', 
			controller: 'InboxCtrl', 
			controllerAs: 'inbox'
		})
		.when('/inbox/email/:id', {
			templateUrl: 'views/email.html', 
			controller: 'EmailCtrl', 
			controllerAs: 'email'
		})
		.otherwise({ // default
			redirectTo: '/inbox'
		});
});