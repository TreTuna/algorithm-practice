import { backspaceCompare } from "./backspaceCompare";

describe("countingElements", function () {
  it("should exist", function () {
    expect(backspaceCompare).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof backspaceCompare).toBe("function");
  });

  it("should return true", function () {
    expect(backspaceCompare("ac#d", "adc#")).toBeTruthy();
  });

  it("should return false", function () {
    expect(backspaceCompare("ac##", "adc#")).toBeFalsy();
  });
});
