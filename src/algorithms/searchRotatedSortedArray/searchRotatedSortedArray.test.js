import { search } from "./searchRotatedSortedArray";

describe("search", function () {
  it("should exist", function () {
    expect(search).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof search).toBe("function");
  });

  it("should return the index if number is found", function () {
    const arr = [4, 5, 7, 2, 3];
    const target = 4;
    const output = 0;
    expect(search(arr, target)).toStrictEqual(output);
  });

  it("should return -1 if number is not found", function () {
    const arr = [4, 5, 7, 2, 3];
    const target = 1;
    const output = -1;
    expect(search(arr, target)).toStrictEqual(output);
  });
});
