angular.module("LoginCtrl", []).controller("LoginController", function($scope, $http, $location) {

  $scope.submit = function() {
    console.log($scope.username +" "+ $scope.password);
    $location.path('/dashboard');
  };

});
