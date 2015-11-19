var app = angular.module('routeEx', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/view1', {
    templateUrl: 'view1.html',
    controller: 'routeCtrl'
  });

  $routeProvider.when('/view2', {
    templateUrl: 'view2.html',
    controller: 'routeCtrl'
  });

  $routeProvider.otherwise({
  templateUrl: '404error.html',
  controller: 'routeCtrl'
});

});

app.controller('routeCtrl', function(){

});
