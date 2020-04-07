import { isFirstComeFirstServed } from "./isFirstComeFirstServed";

describe("isFirstComeFirstServed", function () {
  it("should exist", function () {
    expect(isFirstComeFirstServed).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof isFirstComeFirstServed).toBe("function");
  });

  it("when both registers have same number of orders", function () {
    expect(
      isFirstComeFirstServed([1, 4, 5], [2, 3, 6], [1, 2, 3, 4, 5, 6])
    ).toBeTruthy();
  });

  it("registers have different lengths", function () {
    expect(
      isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5])
    ).toBeFalsy();
  });

  it("one register is empty", function () {
    expect(isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6])).toBeTruthy();
  });

  it("served orders is missing orders", function () {
    expect(isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5])).toBeFalsy();
  });

  it("served orders has extra orders", function () {
    expect(
      isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 3, 5, 6, 8])
    ).toBeFalsy();
  });

  it("one register has extra orders", function () {
    expect(isFirstComeFirstServed([1, 9], [7, 8], [1, 7, 8])).toBeFalsy();
  });

  it("one register has unserved orders", function () {
    expect(isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9])).toBeFalsy();
  });
});
