'use strict'

module.exports = function(volunteer){

  volunteer.controller('SignUpController',['$scope','VolunteerService',function($scope,VolunteerService){
    $scope.signUp() = function(){
      VolunteerService.SignUp($scope.name,$scope.date)
    }
  }]);
}
