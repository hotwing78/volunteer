'use strict'

let fs = require('fs');

module.export = EventLog;

function EventLog(){
  this.eventsId = 2;
  this.usersId = 0;
  this.events = [];
  this.users = [];
  this.loadUsers();
  this.loadEvents();
  return this;
  // "id":0,
  // "name":"Home building",
  // "date":"07/06/2016",
  // "signUP": false,
  // "host":"HFH"
}

//****************MY save FUNCTONS FOR USERS AND EVENTS
EventLog.prototype.saveEvents = function(){
  fs.writeFile(`data/events.json`,JSON.stringify(this.events));
};

EventLog.prototype.saveUsers = function(){
  fs.writeFile(`data/users.json`,JSON.stringify(this.users));
};
/*******************************************************/

//****************MY LOAD FUNCTONS FOR USERS AND EVENTS
EventLog.prototype.loadUsers = function(){
  let self = this;
  fs.readFile('data/users.json', 'utf8', function(err,contents){
    console.log('Events are ready')
    self.users = JSON.parse(contents);
  });
};

EventLog.prototype.loadEvents = function(){
  let self = this;
  fs.readFile('data/events.json', 'utf8', function(err,contents){
    console.log('Events are ready')
    self.events = JSON.parse(contents);
  });
};
/*******************************************************/

EventLog.prototype.newUser = function(user){
    user.id = usersId;
    this.usersId++;
    this.loadUsers();
    this.users.push(user);
    this.saveUsers();
};

EventLog.prototype.signUp = function(id){
  for(let i = 0; i < this.events.length; i++){
    if(this.events[1].id === id){
      this.events[i].signUP = true;
    }
  }

  this.saveEvents();
};


EventLog.prototype.getAll = function(source){//returns users or events depending on specified
  return this.source;
}
