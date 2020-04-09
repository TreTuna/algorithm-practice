import { middleNode } from "./middleNode";

describe("middleNode", function () {
  it("should exist", function () {
    expect(middleNode).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof middleNode).toBe("function");
  });

  it("should return the array of characters reversed", function () {
    const input = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 4,
            next: {
              val: 5,
              next: { val: 6, next: { val: 7, next: { val: 8, next: null } } },
            },
          },
        },
      },
    };

    const output = {
      val: 5,
      next: { val: 6, next: { val: 7, next: { val: 8, next: null } } },
    };

    expect(middleNode(input)).toStrictEqual(output);
  });
});
