import { twoSum } from "./twoSum";

describe("twoSum", function () {
  it("should exist", function () {
    expect(twoSum).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof twoSum).toBe("function");
  });

  it("should return the proper indexes in an array", function () {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toStrictEqual([0, 1]);
  });
});
