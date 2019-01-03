var Stack = function() {
  var storage = [];
  var length = 0;

  this.push = function(val){
    storage[length++] = val;
  };

  this.pop = function(){
    var rtnVal = storage[--length];
    delete(storage[length]);
    return rtnVal;
  };

  this.size = function(){
    return length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(val){
    inbox.push(val);
  };

  this.dequeue = function(){
    if(outbox.size() === 0) {
      for (var i = inbox.size(); i > 0; i--) {
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };

  this.size = function(){
    return outbox.size() + inbox.size();
  };
};


// ***** var Stack = function() {
// Variables accessible through closure to methods defined below
var storage = [];
var length = 0;
// Add to back / top of stack
this.push = function(value){
  // Increment length every time we add to stack
  storage[length++] = value;
};
// Remove from back / top
this.pop = function(){
  if(length){
    // Decrement length before accessing item to remove
    var value = storage[--length];
    delete storage[length];
    return value;
  }
};
this.size = function(){
  return length;
};
};

// Implementing queue using stacks
var Queue = function(){
  var inbox = new Stack();
  var outbox = new Stack();
  this.enqueue = function(item){
    inbox.push(item);
  };
  // If the outbox is empty we flip
  // everything from the inbox into the
  // outbox
  this.dequeue = function(){
    if(outbox.size() === 0){
      while(inbox.size() !== 0){
        outbox.push(inbox.pop());
      }
    }
    return outbox.pop();
  };
  this.size = function(){
    return inbox.size() + outbox.size();
  };
};