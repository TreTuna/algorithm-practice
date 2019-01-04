Write a stack. Once you're done, implement a queue using two stacks. Do not create a storage array for your queue.

Given Code:

let Stack = function() {
let storage = [];

this.push = function(){

};

this.pop = function(){

};

this.size = function(){

};
};

let Queue = function() {

let inbox = new Stack();
let outbox = new Stack();

this.enqueue = function(){

};

this.dequeue = function(){

};

this.size = function(){

};
};
