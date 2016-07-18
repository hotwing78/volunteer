let random = angular.module('EventsController');
//Simply proving to myself that I can name it whatever I like

random.controller('EventsController',['$scope','VolunteerService',function($scope,VolunteerService){
  $scope.events = VolunteerService.getEvents();
}]);
