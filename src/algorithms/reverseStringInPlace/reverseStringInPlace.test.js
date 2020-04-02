import { reverseStringInPlace } from "./reverseStringInPlace";

describe("reverseStringInPlace", function () {
  it("should exist", function () {
    expect(reverseStringInPlace).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof reverseStringInPlace).toBe("function");
  });

  it("should return the array of characters reversed", function () {
    const string = ["a", "s", "d", "f"];
    const answer = ["f", "d", "s", "a"];
    reverseStringInPlace(string);
    expect(string).toStrictEqual(answer);
  });
});
