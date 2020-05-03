function Node(value) {
  this.value = value;
  this.next = null;
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  appendToHead(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    }
    return true;
  }

  appendToTail(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
    return true;
  }

  removeHead() {
    if (this.head) {
      const oldHead = this.head;
      if (this.head.next) {
        this.head = this.head.next;
      } else {
        this.head = null;
        this.tail = null;
      }
      return oldHead.value;
    }
    return null;
  }

  contains(target) {
    let current = this.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
