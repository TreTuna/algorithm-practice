class LinkedList {
  constructor(initialValue) {
    if(!initialValue) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.newNode(initialValue);
      this.tail = this.head;
    };
  }

  newNode = (value) => {
    let node = {};
    node.value = value;
    node.next = null;
    return node;
  }

  addToTail = (value) => {
    let newTail = this.newNode(value);
    if(!this.head) {
      this.head = newTail;
    };
    if (this.tail) {
      this.tail.next = newTail;
    };
    this.tail = newTail;
  }

  removeHead = () => {
    let newHead = this.head.next;
    let oldHead = this.head.value;
    this.head = newHead;
    return oldHead;
  }

  contains = (searchFor) => {
    let node = this.head;
    while (node) {
      if (node.value === searchFor) {
        return true;
      };
      node = node.next;
    };
    return false;
  }
};











// deeper dive questions
// what are advantages of linked list vs array? disadvantages?
// what about linked lists as recursive data structures?
var LinkedList = function(){
  this.head = null;
  this.tail = null;
  // this constructor doesn't take an initial value. the challenge app uses examples of instantiating LinnkedList with an initial value. how would you account for passing an initial value? are there methods you can reuse?
};

LinkedList.prototype.addToTail = function(value){
  var newTail = this.makeNode(value);
  if ( !this.head ){
    this.head = newTail;
  } if ( this.tail ){
    this.tail.next = newTail;
  }
  this.tail = newTail;
};

LinkedList.prototype.removeHead = function(){
  var oldHead = this.head;
  if (!this.head.next){
    // does this actually work? why not? we are trying to account for edge case of a one node linked list. what actually happens?
    this.tail = null;
    return null;
  }
  this.head = this.head.next;
  return oldHead.value;
};

LinkedList.prototype.contains = function(target){
  var node = this.head;
  // what is this while loop checking for? when does it break out?
  while ( node ){
    if ( node.value === target ){
      return true;
    } else {
      node = node.next;
    }
  }
  return false;
};

LinkedList.prototype.makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};