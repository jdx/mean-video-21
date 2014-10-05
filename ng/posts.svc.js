angular.module('myapp')
.service('PostsSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/posts')
    .then(function (response) {
      return response.data
    })
  }
})
