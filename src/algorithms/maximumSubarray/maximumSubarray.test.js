import { maxSubArray } from "./maximumSubarray";

describe("maxSubArray", () => {
  it("should exist", () => {
    expect(maxSubArray).toBeDefined();
  });

  it("should be a function", () => {
    expect(typeof maxSubArray).toBe("function");
  });

  it("should return the array of characters reversed", () => {
    const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const output = 6;
    expect(maxSubArray(input)).toStrictEqual(output);
  });
});
