let nugget = angular.module('EventsDirectives');

// The name matters; this is the HTML element name in this case.
nugget.directive('event', function () {
    return {
        restrict: 'E',  // this directive is an HTML element
        templateUrl: 'templates/directives/events.html',  // template to use
        scope: {
            // http://stackoverflow.com/questions/26409460/angularjs-pass-argument-to-directive
            //
            // if you care about user input: = is two-way binding
            // else @ simply reads the value (one-way binding)
            //
            // info="x" is a thing that should henceforth be called 'book'
            events: '=info',
        },
        // Good idea: don't leave random names scattered throughout your HTML elements
        replace: true,
    };
});

// nugget.directive('ngRepeat', function () {
//     return {
//         restrict: 'A',
//     }
// })
