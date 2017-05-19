angular.module('MainCtrl', []).controller('MainController', function($scope, $location, User) {

  $scope.getUsers = function() {
    User.getUsers().then(function(res) {
      $scope.users = res.data;
    }, function(err) {
    });
  };

  $scope.createUser = function() {
    User.createUser($scope.user).then(function(res) {
    	console.log(res)
      $location.url('/get-users');
    }, function(err) {
    	console.log(err)
    });
  };

});