import { groupAnagrams } from "./groupAnagrams";

describe("groupAnagrams", function () {
  it("should exist", function () {
    expect(groupAnagrams).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof groupAnagrams).toBe("function");
  });

  it("should return the array of characters reversed", function () {
    const inputs = [["eat", "tea", "tan", "ate", "nat", "bat"]];
    const output = [[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]];
    inputs.forEach((input, i) => {
      expect(groupAnagrams(input)).toStrictEqual(output[i]);
    });
  });
});
