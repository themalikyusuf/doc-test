angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/get-users', {
			templateUrl: 'views/get-users.html',
			controller: 'MainController'
		})

		.when('/create-users', {
			templateUrl: 'views/create-users.html',
			controller: 'MainController'	
		});

	$locationProvider.html5Mode(true);

}]);