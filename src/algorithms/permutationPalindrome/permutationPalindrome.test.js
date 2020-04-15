import { permutationPalindrome } from "./permutationPalindrome";

describe("inFlightMovies", function () {
  it("should exist", function () {
    expect(permutationPalindrome).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof permutationPalindrome).toBe("function");
  });

  it("palindrome is true", function () {
    const str = "civic";
    expect(permutationPalindrome(str)).toBeTruthy();
  });
  it("randomized palindrome is true", function () {
    const str = "ivicc";
    expect(permutationPalindrome(str)).toBeTruthy();
  });

  it("non-palindrome is false", function () {
    const str = "civil";
    expect(permutationPalindrome(str)).toBeFalsy();
  });

  it("randomized non-palindrome is false", function () {
    const str = "civcii";
    expect(permutationPalindrome(str)).toBeFalsy();
  });
});
