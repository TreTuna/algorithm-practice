import { mergeMeetings } from "./mergeMeetings";

describe("mergeMeetings", function () {
  it("should exist", function () {
    expect(mergeMeetings).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof mergeMeetings).toBe("function");
  });

  it("should return the correct answer", function () {
    const meetingSets = [
      [
        { startTime: 4, endTime: 8 },
        { startTime: 0, endTime: 1 },
        { startTime: 11, endTime: 12 },
        { startTime: 3, endTime: 5 },
        { startTime: 9, endTime: 10 },
        { startTime: 10, endTime: 13 }
      ],
      [
        { startTime: 1, endTime: 10 },
        { startTime: 2, endTime: 6 },
        { startTime: 3, endTime: 5 },
        { startTime: 7, endTime: 9 }
      ],
      [{ startTime: 2, endTime: 7 }]
    ];

    const answers = [
      [
        { startTime: 0, endTime: 1 },
        { startTime: 3, endTime: 8 },
        { startTime: 9, endTime: 13 }
      ],
      [{ startTime: 1, endTime: 10 }],
      [{ startTime: 2, endTime: 7 }]
    ];

    meetingSets.forEach((set, i) => {
      expect(mergeMeetings(set)).toStrictEqual(answers[i]);
    });
  });
});
