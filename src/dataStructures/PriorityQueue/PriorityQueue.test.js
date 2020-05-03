import PriorityQueue from "./PriorityQueue";

describe("PriorityQueue", () => {
  it("PriorityQueue has the correct API", () => {
    const priorityQueue = new PriorityQueue();
    expect(priorityQueue).toBeInstanceOf(PriorityQueue);
    expect(priorityQueue.enqueue).toBeInstanceOf(Function);
    expect(priorityQueue.dequeue).toBeInstanceOf(Function);
    expect(priorityQueue.front).toBeInstanceOf(Function);
    expect(priorityQueue.isEmpty).toBeInstanceOf(Function);
    expect(priorityQueue.printQueue).toBeInstanceOf(Function);
  });

  it("priorityQueue", () => {
    const priorityQueue = new PriorityQueue();
    expect(priorityQueue.isEmpty()).toBe(true);
    expect(priorityQueue.dequeue()).toBe(null);

    [
      [1, 20],
      [3, 8],
      [10, 12],
      [20, 2],
      [5, 18],
      [21, 1],
    ].forEach((value) => priorityQueue.enqueue(value[0], value[1]));
    expect(priorityQueue.isEmpty()).toBe(false);
    expect(priorityQueue.front()).toBe(21);
    expect(priorityQueue.dequeue()).toBe(21);
    expect(priorityQueue.dequeue()).toBe(20);
    expect(priorityQueue.dequeue()).toBe(3);
    expect(priorityQueue.dequeue()).toBe(10);
    expect(priorityQueue.dequeue()).toBe(5);
    expect(priorityQueue.dequeue()).toBe(1);
    expect(priorityQueue.isEmpty()).toBe(true);
    expect(priorityQueue.dequeue()).toBe(null);
    expect(priorityQueue.front()).toBeNull();
  });
});
