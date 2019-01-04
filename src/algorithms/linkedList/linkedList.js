export function LinkedList(initialValue) {
  if (!initialValue) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.newNode(initialValue);
    this.tail = this.head;
  }
}

LinkedList.prototype.addToTail = function(value) {
  let newTail = this.newNode(value);
  if (!this.head) {
    this.head = newTail;
  }
  if (this.tail) {
    this.tail.next = newTail;
  }
  this.tail = newTail;
};

LinkedList.prototype.removeHead = function() {
  let prevHead = this.head;
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return prevHead.value;
};

LinkedList.prototype.contains = function(target) {
  let result = false;
  let node = this.head;
  let checkNodes = function(node) {
    if (node.value === target) {
      result = true;
      return;
    } else if (node.next !== null) {
      node = node.next;
      checkNodes(node);
    }
    return;
  };
  checkNodes(node);
  return result;
};

LinkedList.prototype.newNode = function(value) {
  let node = {};
  node.value = value;
  node.next = null;
  return node;
};
