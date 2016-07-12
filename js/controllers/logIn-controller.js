'use-strict'

module.exports = function(volunteer){

  volunteer.controller('LogInController',['$scope','$http','LogInService',function($scope,$http,LogInService){

    $scope.logIn() = function(){
        LogInService.LogIn($scope.username,$scope.password)
    };

  }]);

}
