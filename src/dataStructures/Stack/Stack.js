import DoublyLinkedList from "../DoublyLinkedList/DoublyLinkedList.js";

/* using DoublyLinkedList
export default class Stack {
  constructor() {
    this.stack = new DoublyLinkedList();
  }

  push(value) {
    this.stack.appendToTail(value);
    return true;
  }

  pop() {
    if (!this.stack.tail) {
      return null;
    } else {
      let oldTail = this.stack.removeTail();
      return oldTail;
    }
  }

  peek() {
    return this.stack.tail.value;
  }

  isEmpty() {
    return this.stack.tail ? false : true;
  }
}
*/

// Using Array

export default class Stack {
  constructor() {
    this.data = [];
    this.pointer = -1;
  }

  push(value) {
    this.data.push(value);
    this.pointer++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    } else {
      this.pointer--;
      return this.data.pop();
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data[this.pointer];
  }

  isEmpty() {
    return this.pointer < 0;
  }
}
