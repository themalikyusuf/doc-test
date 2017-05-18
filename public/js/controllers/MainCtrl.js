angular.module('MainCtrl', []).controller('MainController', function($scope, User) {

	$scope.tagline = 'To the moon and back!';	
  $scope.getUsers = function() {
    User.getUsers().then(function(res) {
      $scope.users = res.data;
    }, function(err) {
    });
  };

});