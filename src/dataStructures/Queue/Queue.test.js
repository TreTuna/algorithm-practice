import Queue from "./Queue";

describe("Queue", () => {
  it("Queue has the correct API", () => {
    const queue = new Queue();
    expect(queue).toBeInstanceOf(Queue);
    expect(queue.add).toBeInstanceOf(Function);
    expect(queue.remove).toBeInstanceOf(Function);
    expect(queue.peek).toBeInstanceOf(Function);
    expect(queue.isEmpty).toBeInstanceOf(Function);
  });

  it("Queue", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    expect(queue.remove()).toBe(null);

    [1, 3, 10, 20, 5, 21].forEach((value) => queue.add(value));
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(1);
    expect(queue.remove()).toBe(1);
    expect(queue.remove()).toBe(3);
    expect(queue.remove()).toBe(10);
    expect(queue.remove()).toBe(20);
    expect(queue.remove()).toBe(5);
    expect(queue.remove()).toBe(21);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.remove()).toBe(null);
  });
});
