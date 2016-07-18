 'use-strict'

module.exports = function(volunteer) {
      volunteer.factory('VolunteerService',['$http','$location',function($http,$location){

        let events = [];
        return{
          logIn: function(username, password) {
            // Get user name and password credentials
            $http({
              method: 'get',
              url: 'http://localhost:3000/api/volunteers'
            }).then(function(response){
                      console.table(response.data)
                      angular.copy(response.data, events);
                    });
                }, //end LogIn services
         signUp: function(name,date){
          //  Post new user into database
          $http.post('http://localhost:3000/api/volunteers'
                $scope.name = name,
                $scope.date = date
          });
        },//end of Event Registration services
        getEvents: function(){
          // Get the available Events
          $http.get('http://localhost:3000/api/volunteers.json')
              .then(function(response){
                angular.copy(response.data,events);
              });
              return events;
        },

      }
  }]);
}
