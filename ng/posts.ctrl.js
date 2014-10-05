angular.module('myapp')
.controller('PostsCtrl', function ($scope, PostsSvc) {
  var reload = function () {
    PostsSvc.fetch()
    .then(function (posts) {
      $scope.posts = posts
    })
  }
  reload()

  $scope.addPost = function (status) {
    PostsSvc.create({status: status})
    .then(reload)
  }
})
