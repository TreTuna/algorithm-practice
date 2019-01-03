import { binarySearch } from "./binarySearchArray";

describe("binarySearch", function() {
  it("should exist", function() {
    expect(binarySearch).toBeDefined();
  });

  it("should be a function", function() {
    expect(typeof binarySearch).toBe("function");
  });

  it("should return 0 for 5 in [5]", function() {
    let result = binarySearch([5], 5);
    expect(result).toBe(0);
  });

  it("should return null for 4 in [5]", function() {
    let result = binarySearch([5], 4);
    expect(result).toBeNull();
  });

  it("should return 0 for 1 in [1, 2, 3, 4, 5]", function() {
    let result = binarySearch([1, 2, 3, 4, 5], 1);
    expect(result).toBe(0);
  });

  it("should return 1 for 2 in [1, 2, 3, 4, 5]", function() {
    let result = binarySearch([1, 2, 3, 4, 5], 2);
    expect(result).toBe(1);
  });

  it("should return 2 for 3 in [1, 2, 3, 4, 5]", function() {
    let result = binarySearch([1, 2, 3, 4, 5], 3);
    expect(result).toBe(2);
  });

  it("should return 3 for 4 in [1, 2, 3, 4, 5]", function() {
    let result = binarySearch([1, 2, 3, 4, 5], 4);
    expect(result).toBe(3);
  });

  it("should return 4 for 5 in [1, 2, 3, 4, 5]", function() {
    let result = binarySearch([1, 2, 3, 4, 5], 5);
    expect(result).toBe(4);
  });

  it("should return 3 for 4 in [1, 2, 3, 4, 5, 6]", function() {
    let result = binarySearch([1, 2, 3, 4, 5], 4);
    expect(result).toBe(3);
  });

  it("should return 3 for 45 in [11, 22, 33, 45, 53, 62]", function() {
    let result = binarySearch([11, 22, 33, 45, 53, 62], 45);
    expect(result).toBe(3);
  });

  it("should return null for 55 in [11, 22, 33, 45, 53, 62]", function() {
    let result = binarySearch([11, 22, 33, 45, 53, 62], 55);
    expect(result).toBeNull();
  });
});
