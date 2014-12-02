//create ht emodule and name it scotchApp
var scotchApp = angular.module('scotchApp', []);

//configure our routes
scotchApp.config(function($routeProvider) {
  $routeProvider

    //route for the about page
    .when('/about', {
      templateUrl : 'about.html',
      controller  : 'aboutController'
    });
});


//create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
  $scope.message = "Everyone come and see how good I look";
});

scotchApp.controller('aboutController', function($scope) {
  $scope.message = "Look! I am an about page.";
});
