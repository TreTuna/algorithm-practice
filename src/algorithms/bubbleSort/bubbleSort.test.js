import { bubbleSort } from "./bubbleSort";

describe("Bubble Sort", function() {
  it("should exist", function() {
    expect(bubbleSort).toBeDefined();
  });
  it("should be a function", function() {
    expect(typeof bubbleSort).toBe("function");
  });
  it("should return sorted array for [20, -10, -10, 2, 4, 299]", function() {
    Array.prototype.sort = null;
    let unsortedArray = [20, -10, -10, 2, 4, 299];
    let sortedArray = [-10, -10, 2, 4, 20, 299].toString();
    let result = bubbleSort(unsortedArray).toString();
    expect(result).toEqual(sortedArray);
  });
  it("should return sorted array for [2, 2, 2, 2, 2, 22, 2, 2, 222, 2222, 22, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22]", function() {
    Array.prototype.sort = null;
    let unsortedArray = [
      2,
      2,
      2,
      2,
      2,
      22,
      2,
      2,
      222,
      2222,
      22,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      22
    ];
    let sortedArray = [
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      22,
      22,
      22,
      222,
      2222
    ].toString();
    let result = bubbleSort(unsortedArray).toString();
    expect(result).toEqual(sortedArray);
  });
  it("should return sorted array for [18, 30, 25, 28, 24, 19, 31, 20, 35, 24, 36, 26, 30, 29, 40, 36]", function() {
    Array.prototype.sort = null;
    let unsortedArray = [
      18,
      30,
      25,
      28,
      24,
      19,
      31,
      20,
      35,
      24,
      36,
      26,
      30,
      29,
      40,
      36
    ];
    let sortedArray = [
      18,
      19,
      20,
      24,
      24,
      25,
      26,
      28,
      29,
      30,
      30,
      31,
      35,
      36,
      36,
      40
    ].toString();
    let result = bubbleSort(unsortedArray).toString();
    expect(result).toEqual(sortedArray);
  });
  it("should return sorted array for [33, 14, 5, 23, 1, 22]", function() {
    Array.prototype.sort = null;
    let unsortedArray = [33, 14, 5, 23, 1, 22];
    let sortedArray = [1, 5, 14, 22, 23, 33].toString();
    let result = bubbleSort(unsortedArray).toString();
    expect(result).toEqual(sortedArray);
  });
  it("should return sorted array for [-4, 54, 2, -23, 100, 0]", function() {
    Array.prototype.sort = null;
    let unsortedArray = [-4, 54, 2, -23, 100, 0];
    let sortedArray = [-23, -4, 0, 2, 54, 100].toString();
    let result = bubbleSort(unsortedArray).toString();
    expect(result).toEqual(sortedArray);
  });
  it("should return empty array for []", function() {
    Array.prototype.sort = null;
    let unsortedArray = [];
    let sortedArray = [].toString();
    let result = bubbleSort(unsortedArray).toString();
    expect(result).toEqual(sortedArray);
  });
});
