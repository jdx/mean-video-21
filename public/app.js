angular.module("myapp",["ngRoute"]);
angular.module("myapp").controller("GithubCtrl",["GithubSvc","$scope",function(t,e){t.fetchUsers().then(function(t){e.users=t})}]);
angular.module("myapp").service("GithubSvc",["$http",function(t){this.fetchUsers=function(){return t.get("https://api.github.com/users").then(function(t){return t.data})}}]);
angular.module("myapp").controller("PostsCtrl",["$scope","PostsSvc",function(o,t){t.fetch().then(function(t){o.posts=t})}]);
angular.module("myapp").service("PostsSvc",["$http",function(t){this.fetch=function(){return t.get("/api/posts").then(function(t){return t.data})}}]);
angular.module("myapp").config(["$routeProvider","$locationProvider",function(t,e){e.html5Mode(!0),t.when("/",{templateUrl:"/templates/home.html"}).when("/github",{templateUrl:"/templates/github.html",controller:"GithubCtrl"}).when("/posts",{templateUrl:"/templates/posts.html",controller:"PostsCtrl"})}]);