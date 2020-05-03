import DoublyLinkedList from "./DoublyLinkedList";

describe("DoublyLinkedList", () => {
  it("DoublyLinkedList has the correct API", () => {
    const list = new DoublyLinkedList();
    expect(list).toBeInstanceOf(DoublyLinkedList);
    expect(list.appendToHead).toBeInstanceOf(Function);
    expect(list.appendToTail).toBeInstanceOf(Function);
    expect(list.removeHead).toBeInstanceOf(Function);
    expect(list.contains).toBeInstanceOf(Function);
  });

  it("DoublyLinkedList", () => {
    const list = new DoublyLinkedList();
    [1, 3, 10, 20, 5, 21].forEach((value) => list.appendToTail(value));
    expect(list.contains(5)).toBeTruthy();
    expect(list.contains(35)).toBeFalsy();
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(21);
    list.removeHead();
    expect(list.head.value).toBe(3);
    expect(list.tail.value).toBe(21);
    list.removeTail();
    expect(list.tail.value).toBe(5);
    list.removeTail();
    list.removeTail();
    list.removeTail();
    list.removeTail();
    expect(list.tail).toBeNull();
    expect(list.head).toBeNull();
    list.appendToHead(7);
    expect(list.head.value).toBe(7);
    expect(list.tail.value).toBe(7);
    list.appendToHead(8);
    expect(list.head.value).toBe(8);
    expect(list.tail.value).toBe(7);
    list.removeHead();
    expect(list.head.value).toBe(7);
    expect(list.tail.value).toBe(7);
    list.removeHead();
    expect(list.tail).toBeNull();
    expect(list.head).toBeNull();
  });
});
