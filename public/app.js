(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'


module.eports = function(volunteer){
  volunteer.controller('Commited',['$scope','VolunteerService',function($scope,VolunteerService){
    VolunteerService.getEvents();
  }]);
}

},{}],2:[function(require,module,exports){
'use-strict'

module.exports = function(volunteer){

  volunteer.controller('LogInController',['$scope','VolunteerService',function($scope,VolunteerService){

    $scope.logIn() = function(){
        VolunteerService.LogIn($scope.username,$scope.password)
    };

  }]);

}

},{}],3:[function(require,module,exports){
'use strict'

module.exports = function(volunteer){

  volunteer.controller('SignUpController',['$scope','VolunteerService',function($scope,VolunteerService){
    $scope.signUp() = function(){
      VolunteerService.SignUp($scope.name,$scope.date)
    }
  }]);
}

},{}],4:[function(require,module,exports){
'use strict';

var app = angular.module('Volunteer', ['ngRoute', 'VolunteerControllers', 'VolunteerServices', 'VolunteerDirectives']);
app.module('VolunteerControllers', []);
app.module('VolunteerServices', []);
app.module('VolunteerDirectives', []);

app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider.when('/logIn', {
    templateUrl: 'templates/logIn.html',
    controller: 'LogInController'
  }).when('/', {
    redirectTo: '/login'
  }).when('/commited', {
    templateUrl: 'templates/commited.html',
    controller: 'Commited'
  }).when('/events', {
    templateUrl: 'templates/events.html',
    controller: 'EventsController'
  });
}]);

/* Controllers */
require('./controllers/commited');
//require('./controllers/events');
require('./controllers/logIn');
require('./controllers/signup');

/* Services */
require('./services/services');

/* Directives */
//require('./directives/book');
},{"./controllers/commited":1,"./controllers/logIn":2,"./controllers/signup":3,"./services/services":5}],5:[function(require,module,exports){
//  'use-strict'
//
// module.exports = function(volunteer) {
//       volunteer.factory('VolunteerService',['$http','$location',function($http,$location){
//
//         let events = [];
//         return{
//           logIn: function(username, password) {
//             // Get user name and password credentials
//             $http({
//               method: 'get'
//               url: 'http://localhost:3000/api/volunteers'
//             }).then(function(response){
//                       console.table(response.data)
//                       angular.copy(response.data, events);
//                     });
//                 }, //end LogIn services
//          signUp: function(name,date){
//           //  Post new user into database
//           $http.post('http://localhost:3000/api/volunteers'{
//                 name = name,
//                 date = date
//           });
//         },//end of Event Registration services
//         getEvents: function(){
//           // Get the available Events
//           $http.get('http://localhost:3000/api/volunteers.json')
//               .then(function(response){
//                 angular.copy(response.data,events);
//               });
//               return events;
//         },
//
//       }
//   }]);
// }

},{}]},{},[4])