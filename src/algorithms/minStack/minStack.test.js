import { MinStack } from "./minStack";

describe("minStack", function () {
  it("should exist", function () {
    expect(MinStack).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof MinStack).toBe("function");
  });

  it("should return the array of characters reversed", function () {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    expect(minStack.getMin()).toBe(-3);
    minStack.pop();
    expect(minStack.top()).toBe(0);
    expect(minStack.getMin()).toStrictEqual(-2);
  });
});
