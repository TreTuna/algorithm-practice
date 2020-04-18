import { numIslands } from "./numIslands";

describe("numIslands", function () {
  it("should exist", function () {
    expect(numIslands).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof numIslands).toBe("function");
  });

  it.skip("should return the proper number of islands", function () {
    const input = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    const output = 1;
    expect(numIslands(input)).toStrictEqual(output);
  });
  it("should return the proper number of islands", function () {
    const input = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    const output = 3;
    expect(numIslands(input)).toStrictEqual(output);
  });

  it.skip("should return the proper number of islands", function () {
    const input = [["1", "1"]];
    const output = 1;
    expect(numIslands(input)).toStrictEqual(output);
  });
});
