'use-strict'

module.exports = function(volunteer){

  volunteer.controller('LogInController',['$scope','VolunteerService',function($scope,VolunteerService){

    $scope.logIn() = function(){
        VolunteerService.LogIn($scope.username,$scope.password)
    };

  }]);

}
