var mixEvents = function(obj) {
  //Your code here
  var events = {};

  obj.trigger = function (event) {
    //Your code here
  };

  // Register a callback to be fired on this event.
  obj.on = function (event, callback) {
    //Your code here
  };
  return obj;
};


// **** Solution COde

var mixEvents = function (obj) {
  // We will register event names with
  // associated callbacks here
  var events = {};
  // excecute all the stored callbacks with the
  // provided arguments
  obj.trigger = function (event, ...args) {
    if (events[event]) {
      events[event].forEach(callback => callback.apply(obj, args));
    }
  };

  // Regester a callback with an event
  obj.on = function (event, callback) {
    events[event] = events[event] || [];
    events[event].push(callback);
  };

  return obj;
};

// with some es6 conveniences
var mixEvents = function (obj) {
  var events = {};

  obj.trigger = function (event, ...args) {
    if (events[event]) {
      events[event].forEach(callback => callback.apply(obj, args));
    }
  };

  obj.on = function (event, callback) {
    events[event] = events[event] || [];
    events[event].push(callback);
  };

  return obj;
};

// standard solution
var mixEvents = function (obj) {
  var events = {};

  obj.trigger = function (event) {
    if (events[event]) {
      var args = Array.prototype.slice.call(arguments, 1);
      events[event].forEach(function (callback) {
        callback.apply(obj, args);
      });
    }
  };

  obj.on = function (event, callback) {
    // we are storing them as an array since we might need to handle multiple callbacks for a given event
    events[event] = events[event] || [];
    events[event].push(callback);
  };

  // consider what an obj.remove method would look like. what are things you should take into account?
  return obj;
};

