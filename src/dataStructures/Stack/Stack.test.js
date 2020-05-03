import Stack from "./Stack";

describe("Stack", () => {
  it("Stack has the correct API", () => {
    const stack = new Stack();
    expect(stack).toBeInstanceOf(Stack);
    expect(stack.pop).toBeInstanceOf(Function);
    expect(stack.push).toBeInstanceOf(Function);
    expect(stack.peek).toBeInstanceOf(Function);
    expect(stack.isEmpty).toBeInstanceOf(Function);
  });

  it("Stack", () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.pop()).toBeNull();

    [1, 3, 10, 20, 5, 21].forEach((value) => stack.push(value));
    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.peek()).toBe(21);
    expect(stack.pop()).toBe(21);
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(20);
    expect(stack.pop()).toBe(10);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBeTruthy();
    expect(stack.pop()).toBeNull();
    expect(stack.peek()).toBeNull();
  });
});
