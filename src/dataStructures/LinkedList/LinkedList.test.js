import LinkedList from "./LinkedList";

describe("Linked List", () => {
  it("linkedList has the correct API", () => {
    const list = new LinkedList();
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.appendToTail).toBeInstanceOf(Function);
    expect(list.removeHead).toBeInstanceOf(Function);
    expect(list.contains).toBeInstanceOf(Function);
  });

  it("linkedList", () => {
    const list = new LinkedList();
    [1, 3, 10, 20, 5, 21].forEach((value) => list.appendToTail(value));
    expect(list.contains(5)).toBeTruthy();
    expect(list.contains(25)).toBeFalsy();
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(21);
    list.removeHead();
    expect(list.head.value).toBe(3);
    expect(list.tail.value).toBe(21);
    list.appendToHead(3);
    expect(list.head.value).toBe(3);
    list.removeHead();
    list.removeHead();
    list.removeHead();
    list.removeHead();
    list.removeHead();
    list.removeHead();
    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
    list.appendToHead(4);
    expect(list.head.value).toBe(4);
    expect(list.tail.value).toBe(4);
  });
});
