import { stringShift } from "./stringShift";

describe("stringShift", function () {
  it("should exist", function () {
    expect(stringShift).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof stringShift).toBe("function");
  });

  it("should return the array of characters reversed", function () {
    const input = "abc";
    const shift = [
      [0, 1],
      [1, 2],
    ];
    const output = "cab";
    expect(stringShift(input, shift)).toStrictEqual(output);
  });

  it("should return the array of characters reversed", function () {
    const input = "abcdefg";
    const shift = [
      [1, 1],
      [1, 1],
      [0, 2],
      [1, 3],
    ];
    const output = "efgabcd";
    expect(stringShift(input, shift)).toStrictEqual(output);
  });
});
