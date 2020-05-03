import { productExceptSelf } from "./productExceptSelf";

describe("inFlightMovies", function () {
  it("should exist", function () {
    expect(productExceptSelf).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof productExceptSelf).toBe("function");
  });

  it("palindrome is true", function () {
    const str = "civic";
    expect(productExceptSelf(str)).toBeTruthy();
  });
});
