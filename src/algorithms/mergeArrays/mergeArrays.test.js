import { mergeArrays } from "./mergeArrays";

describe("mergeArrays", function () {
  it("should exist", function () {
    expect(mergeArrays).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof mergeArrays).toBe("function");
  });

  it("should merge the arrays", function () {
    const arr1 = [3, 4, 6, 10, 11, 15];
    const arr2 = [1, 5, 8, 12, 14, 19];
    const answer = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];
    expect(mergeArrays(arr1, arr2)).toStrictEqual(answer);
  });

  it("should merge the arrays", function () {
    const arr1 = [3, 4, 6];
    const arr2 = [];
    const answer = [3, 4, 6];
    expect(mergeArrays(arr1, arr2)).toStrictEqual(answer);
  });
});
