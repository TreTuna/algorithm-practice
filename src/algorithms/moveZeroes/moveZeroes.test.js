import { moveZeroes } from "./moveZeroes";

describe("moveZeroes", function () {
  it("should exist", function () {
    expect(moveZeroes).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof moveZeroes).toBe("function");
  });

  it("should return the array of characters reversed", function () {
    const input = [0, 1, 0];
    const output = [1, 0, 0];
    moveZeroes(input);
    expect(input).toStrictEqual(output);
  });
});
