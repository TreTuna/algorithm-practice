import LinkedList from "../LinkedList/linkedList.js";

export default class Queue {
  constructor() {
    this.queue = new LinkedList();
  }

  add(value) {
    this.queue.appendToTail(value);
    return true;
  }

  remove() {
    const value = this.queue.removeHead();
    return value ? value : null;
  }

  peek() {
    return this.queue.head.value;
  }

  isEmpty() {
    return this.queue.head ? false : true;
  }
}
