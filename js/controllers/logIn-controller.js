'use-strict'

module.exports = function(volunteer){

  volunteer.controller('LogInController',['$scope','$http','VolunteerService',function($scope,$http,VolunteerService){

    $scope.logIn() = function(){
        LogInService.LogIn($scope.username,$scope.password)
    };

  }]);

}
