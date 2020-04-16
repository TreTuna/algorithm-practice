import { wordCloud } from "./wordCloud";

describe("inFlightMovies", function () {
  it("should exist", function () {
    expect(wordCloud).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof wordCloud).toBe("function");
  });

  it("palindrome is true", function () {
    const str = "civic";
    expect(wordCloud(str)).toBeTruthy();
  });
});
