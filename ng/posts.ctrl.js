angular.module('myapp')
.controller('PostsCtrl', function ($scope, PostsSvc) {
  PostsSvc.fetch()
  .then(function (posts) {
    $scope.posts = posts
  })
})
