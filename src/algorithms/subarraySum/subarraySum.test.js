import { subarraySum } from "./subarraySum";

describe("subarraySum", function () {
  it("should exist", function () {
    expect(subarraySum).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof subarraySum).toBe("function");
  });

  it("should return the proper number of subarrays", function () {
    const nums = [1, 1, 1];
    const target = 2;
    expect(subarraySum(nums, target)).toStrictEqual(2);
  });
});
