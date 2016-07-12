 'use-strict'

module.exports = function(volunteer) {
      volunteer.factory('LogInService',['$http','$location',function($http,$location){
        let services = {}
        services.LogIn = function(username, password) {
            $http.get('/users' {
                        username = username,
                        password = password
                    }).then(function(response){
                      console.log(response.data)
                    });
                } //end LogIn services
  }]);
}
