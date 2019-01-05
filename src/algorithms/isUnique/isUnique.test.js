import { isUnique, isUniqueUsingObject } from "./isUnique";

describe("isUnique", function() {
  it("should exist", function() {
    expect(isUnique).toBeDefined();
  });

  it("should be a function", function() {
    expect(typeof isUnique).toBe("function");
  });

  it("should return true if all characters in a string are unique", function() {
    expect(isUnique("uniqe")).toBeTruthy();
  });

  it("should return false is any characters in a string are not unique", function() {
    expect(isUnique("I am not very unique")).toBeFalsy();
  });
});

describe("isUniqueUsingObject", function() {
  it("should exist", function() {
    expect(isUniqueUsingObject).toBeDefined();
  });

  it("should be a function", function() {
    expect(typeof isUniqueUsingObject).toBe("function");
  });

  it("should return true if all characters in a string are unique", function() {
    expect(isUniqueUsingObject("uniqe")).toBeTruthy();
  });

  it("should return false is any characters in a string are not unique", function() {
    expect(isUniqueUsingObject("I am not very unique")).toBeFalsy();
  });
});
