import { reverseWordsInPlace } from "./reverseWordsInPlace";

describe("reverseWordsInPlace", function () {
  it("should exist", function () {
    expect(reverseWordsInPlace).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof reverseWordsInPlace).toBe("function");
  });

  it("should return the array of characters reversed", function () {
    const stringArray = [
      "c",
      "a",
      "k",
      "e",
      " ",
      "p",
      "o",
      "u",
      "n",
      "d",
      " ",
      "s",
      "t",
      "e",
      "a",
      "l"
    ];
    const answer = "steal pound cake";
    reverseWordsInPlace(stringArray);
    expect(stringArray.join("")).toBe(answer);
  });
});
