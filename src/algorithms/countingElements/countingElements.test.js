import { countElements } from "./countingElements";

describe("countingElements", function () {
  it("should exist", function () {
    expect(countElements).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof countElements).toBe("function");
  });

  it("should return 2 with 3 consecutive numbers", function () {
    expect(countElements([1, 2, 3])).toBe(2);
  });

  it("should return 0 with no consecutive numbers", function () {
    expect(countElements([1, 1, 3, 3, 5, 5, 7, 7])).toBe(0);
  });

  it("should return 2 with 3 consecutive numbers", function () {
    expect(countElements([1, 3, 2, 3, 5, 0])).toBe(3);
  });

  it("should return 2 with 3 consecutive numbers", function () {
    expect(countElements([1, 1, 2, 2])).toBe(2);
  });

  it("should return 2 with 3 consecutive numbers", function () {
    expect(countElements([1, 1, 2])).toBe(2);
  });
});
