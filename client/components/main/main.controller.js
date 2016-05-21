app.controller('MainCtrl', ['$scope','$http','$state','$cookieStore', function($scope,$http,$state,$cookieStore,Auth,User) {
  console.log('MainCtrl Loaded...')

  $scope.message = 'HELLO WORLD!'
  
}]);
