angular.module('UserService', []).factory('User', ['$http', function($http) {

		var User = {};

		User.createUser = function(username) {
			return $http.post('http://localhost:3000/api/users', username);
		};
    User.getUsers = function() {
      return $http.get('http://localhost:3000/api/users');
    };

		return User;

}]);

