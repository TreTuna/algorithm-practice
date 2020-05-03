function Node(value, prev) {
  this.value = value;
  this.next = null;
  this.prev = null;
}

export default class DoublyLinkedList {
  constructor() {
    this.value = null;
    this.head = null;
    this.tail = null;
  }

  appendToHead(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      const oldHead = this.head;
      this.head = node;
      oldHead.prev = node;
      this.head.next = oldHead;
    }
    if (!this.tail) {
      this.tail = node;
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
      node.prev = this.tail;
    }
    this.tail = node;
    return true;
  }

  removeHead() {
    let oldHead = this.head;
    if (oldHead.next) {
      this.head = oldHead.next;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return oldHead.value;
  }

  removeTail() {
    let oldTail = this.tail;
    if (oldTail.prev) {
      let oldTail = this.tail;
      this.tail = oldTail.prev;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return oldTail.value;
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
