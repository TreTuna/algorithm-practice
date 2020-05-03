function QNode(value, priority) {
  this.value = value;
  this.priority = priority;
}

export default class PriorityQueue {
  constructor() {
    this.items = [];
  }

  enqueue(value, priority) {
    const node = new QNode(value, priority);
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      const current = this.items[i];
      if (current.priority > node.priority) {
        this.items.splice(i, 0, node);
        contain = true;
        break;
      }
    }
    if (!contain) {
      this.items.push(node);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const node = this.items.shift();
    return node.value;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0].value;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {}
}
