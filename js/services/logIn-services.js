 'use-strict'

module.exports = function(volunteer) {
      volunteer.factory('VolunteerService',['$http','$location',function($http,$location){
        let services = {};
        let events = [];
        services.LogIn = function(username, password) {
            $http.get('http://localhost:3000/api/volunteers.json' {
                        username = username,
                        password = password
                    }).then(function(response){
                      console.log(response.data)
                    });
                }, //end LogIn services
        services.EventReg = function(name,date){
          $http.post('http://localhost:3000/api/volunteers.json'{
                name = name,
                date = date
          });
        },//end of Event Registration services
        services.getEvents = function(){
          $http.get('http://localhost:3000/api/volunteers.json')
              .then(function(response){
                events = response.data;
              });
              return events;
        }

        return services;
  }]);
}
