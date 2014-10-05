angular.module("myapp",["ngRoute"]);
angular.module("myapp").controller("GithubCtrl",["GithubSvc","$scope",function(t,e){t.fetchUsers().then(function(t){e.users=t})}]);
angular.module("myapp").service("GithubSvc",["$http",function(t){this.fetchUsers=function(){return t.get("https://api.github.com/users").then(function(t){return t.data})}}]);
angular.module("myapp").config(["$routeProvider","$locationProvider",function(t,e){e.html5Mode(!0),t.when("/",{templateUrl:"/templates/home.html"}).when("/github",{templateUrl:"/templates/github.html",controller:"GithubCtrl"})}]);