import { Stack, Queue } from "./queueStack";

describe("Stack", function() {
  describe("constructor", function() {
    it("should exist", function() {
      expect(Stack).toBeDefined();
    });
    it("should be a function", function() {
      // `typeof Stack !== 'function'` but it _should_ be a function!
      expect(typeof Stack).toBe("function");
    });
    it("should be useable as a constructor", function() {
      let stack = new Stack();
      // the constructor should return an object
      expect(stack).toBeDefined();
    });
    it("should return an instance of a stack", function() {
      let stack = new Stack();
      // aka, `stack instanceof Stack` is returning false, but it should be true!
      expect(stack).toBeInstanceOf(Stack);
    });
    it("should return difference instances each time its called using the `new` keyword", function() {
      let stack1 = new Stack();
      let stack2 = new Stack();
      // aka, `stack === stack` but they should be two different `Stack` instances!
      expect(stack1).not.toBe(stack2);
    });
  });

  describe("#push", function() {
    it("should exist", function() {
      let stack = new Stack();
      // stack instances should have a `push` method
      expect(stack.push).toBeDefined();
    });
    it("should add an item to the stack", function() {
      let stack = new Stack();
      // aka, calling `push` should not throw an error
      expect(function() {
        stack.push("a");
      }).not.toThrowError();
    });
  });
  describe("#pop", function() {
    it("should exist", function() {
      let stack = new Stack();
      // aka, stack instances should have a `pop` method
      expect(stack.pop).toBeDefined();
    });
    it("should not throw an error", function() {
      let stack = new Stack();
      stack.push("a");
      // aka, calling `pop` should not throw an error
      expect(function() {
        stack.pop();
      }).not.toThrowError();
    });
  });
  describe("#size", function() {
    it("should exist", function() {
      let stack = new Stack();
      // aka, a stack instance should have a `size` method
      expect(stack.size).toBeDefined();
    });
    it("should give the size of the queue", function() {
      let stack = new Stack();
      stack.push("a");
      // we just added an element so the stack's size should be 1
      expect(stack.size()).toBe(1);
      stack.push("b");
      // we just added _another_ element so the stack's size should now be 2
      expect(stack.size()).toBe(2);
      stack.pop();
      // we just remove an element so the stack's size should be 1
      expect(stack.size()).toBe(1);
      stack.pop();
      // we just remove _another_ element so the stack's size should now be 0
      expect(stack.size()).toBe(0);
    });
  });
});

describe("Queue", function() {
  describe("constructor", function() {
    it("should exist", function() {
      // aka, the variable `Queue` doesn't exist when it should actually be something!
      expect(Queue).toBeDefined();
    });
    it("should be a function", function() {
      // `typeof Queue !== 'function'` but it _should_ be a function!
      expect(typeof Queue).toBe("function");
    });
    it("should be useable as a constructor", function() {
      let queue = new Queue();
      // the constructor should return an object
      expect(queue).toBeDefined();
    });
    it("should return an instance of a queue", function() {
      let queue = new Queue();
      expect(queue).toBeInstanceOf(Queue);
      // aka, `queue instanceof Queue` is returning false, but it should be true!
    });
    it("should return different instances each time its called using the `new` keyword", function() {
      let queue1 = new Queue();
      let queue2 = new Queue();
      expect(queue1).not.toBe(queue2);
      // aka, queue1 === queue2 but they should be two different queue instances!
    });
  });

  describe("#enqueue", function() {
    it("should exist", function() {
      let queue = new Queue();
      expect(queue.enqueue).toBeDefined();
      // queue instances should have a `enqueue` method
    });
    it("should add an item to the queue", function() {
      let queue = new Queue();
      queue.enqueue("a");
      /**
       * queue.size() should be 1 since we only added one item, but your
       * queue.size() function is returning somethine different. this could
       * be a problem with your `size` function or your `enqueue` function.
       */
      expect(queue.size()).toBe(1);
    });
    it("should add two items to the queue", function() {
      let queue = new Queue();
      queue.enqueue("a");
      queue.enqueue("b");
      /**
       * we just added two items so the queue size should be 2 but your
       * `size()` function is returning something different
       */
      expect(queue.size()).toBe(2);
    });
  });

  describe("#dequeue", function() {
    it("should exist", function() {
      let queue = new Queue();
      expect(queue.dequeue).toBeDefined();
      // queue instances should have a `dequeue` method
    });
    it("should remove an item from the queue", function() {
      let queue = new Queue();
      queue.enqueue("a");
      let item = queue.dequeue();
      // `dequeue()` should return the item that was just dequeued
      expect(item).toBeDefined();
      expect(item).toBe("a");
      // queue.size() should be 0 since we just tried to add, then removed an,
      // an item from the queue.
      expect(queue.size()).toBe(0);
    });
    it("should be able to remove two items from the queue", function() {
      let queue = new Queue();
      queue.enqueue("y");
      queue.enqueue("z");
      queue.dequeue();
      queue.dequeue();
      /**
       * queue.size() should be 0 since we just tried to add then remove two
       * items from the queue
       */
      expect(queue.size()).toBe(0);
    });
    it("should be able to alternate with enqueuing", function() {
      let queue = new Queue();
      queue.enqueue("1");
      queue.enqueue("2");
      let item = queue.dequeue();
      expect(item).toBe("1");
      queue.enqueue("3");
      item = queue.dequeue();
      expect(item).toBe("2");
    });
    it("should dequeue items in the order they were enqueued", function() {
      let queue = new Queue();
      queue.enqueue("1");
      queue.enqueue("2");
      let item = queue.dequeue();

      // aka, `dequeue()` should return the item that was just dequeued
      expect(item).toBeDefined();
      // aka, the item just dequeued should be the first item we added
      expect(item).toBe("1");
      item = queue.dequeue();
      // aka, the item dequeued after the first should be the second
      // item we added
      expect(item).toBe("2");
    });
  });
});
