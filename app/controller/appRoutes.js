angular.module("appRoutes", []).config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider){
  $routeProvider
  .when("/", {
    templateUrl: "login.html",
    controller: "LoginController"
  })
  .when("/dashboard", {
    templateUrl: "dashboard.html"
  })
  .otherwise({
    redirectTo: "/"
  });
}]);
