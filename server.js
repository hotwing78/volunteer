'use strict'

let http = require ('http');
let hapi = require ('hapi');//Hapi is a server building framework
let boom = require ('boom');//Boom helps witth error messaging
let inert = require ('inert');//Provides new handler methods

let EventLog = require(./)



const server = new hapi.Server();
  server.connection({
    host: 'localhost',
    port: 8080,
  });
  server.register(inert, () => {});
}

/**
 * Static serving of files. Web requests are all GET requests, and the
 * path is basically saying "anything" here. Retrieve the specified files
 * from the public/ directory (where your gulpfile should be outputting
 * to) and return them.
 */
 server.route({
   method: 'POST',
   path: '/js/eventLog'
 })
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public/',
            redirectToSlash: true,
            index: true
        }
    }
});

server.start()
