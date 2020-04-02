import { happyNumber } from "./happyNumber";

describe("happyNumber", function () {
  it("should exist", function () {
    expect(happyNumber).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof happyNumber).toBe("function");
  });

  it("should return the array of characters reversed", function () {
    const input = 19;
    expect(happyNumber(input)).toBeTruthy();
  });
  it("should return the array of characters reversed", function () {
    const input = 1;
    expect(happyNumber(input)).toBeTruthy();
  });
  it("should return the array of characters reversed", function () {
    const input = 29;
    expect(happyNumber(input)).toBeFalsy();
  });
});
