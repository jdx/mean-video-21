angular.module('myapp')
.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true)
  $routeProvider
  .when('/', {templateUrl: '/templates/home.html'})
  .when('/github', {templateUrl: '/templates/github.html', controller: 'GithubCtrl'})
})
