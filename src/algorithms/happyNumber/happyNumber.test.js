import { isHappy } from "./happyNumber";

describe("isHappy", function () {
  it("should exist", function () {
    expect(isHappy).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof isHappy).toBe("function");
  });

  it("should return the array of characters reversed", function () {
    const input = 19;
    expect(isHappy(input)).toBeTruthy();
  });

  it("should return the array of characters reversed", function () {
    const input = 1;
    expect(isHappy(input)).toBeTruthy();
  });

  it("should return the array of characters reversed", function () {
    const input = 29;
    expect(isHappy(input)).toBeFalsy();
  });

  it("should return the array of characters reversed", function () {
    const input = 7;
    expect(isHappy(input)).toBeTruthy();
  });
});
