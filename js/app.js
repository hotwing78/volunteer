let app = angular.module('Volunteer',['ngRoute','VolunteerControllers','VolunteerServices','VolunteerDirectives']);
app.module('VolunteerControllers',[]);
app.module('VolunteerServices',[]);
app.module('VolunteerDirectives',[]);

app.config(['$routeProvider', function ($routeProvider){

  $routeProvider
  .when('/logIn',{
    templateUrl: 'templates/logIn.html',
    controller: 'LogInController',
  })
  .when('/', {
      redirectTo: '/login',
    })

  .when('/events',{
    templateUrl: 'templates/events.html',
    controller: 'EventsController',
  })
}]);

/* Controllers */
require('./controllers/events');
require('./controllers/logIn');
require('./controllers/signup');

/* Services */
require('./services/services');

/* Directives */
require('./directives/event');
