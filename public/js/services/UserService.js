angular.module('UserService', []).factory('User', ['$http', function($http) {

		var User = {};

		User.createUser = function(user) {
			return $http.post('http://localhost:3000/api/createUser', user);
		};
    User.getUsers = function() {
      return $http.get('http://localhost:3000/api/createUser');
    };

		return User;

}]);

