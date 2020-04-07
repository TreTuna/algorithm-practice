import { canTwoMoviesFillFlight } from "./inFlightMovies";

describe("inFlightMovies", function () {
  it("should exist", function () {
    expect(canTwoMoviesFillFlight).toBeDefined();
  });

  it("should be a function", function () {
    expect(typeof canTwoMoviesFillFlight).toBe("function");
  });

  it("short flight", function () {
    const movieTimes = [2, 4];
    const flightTime = 1;
    expect(canTwoMoviesFillFlight(movieTimes, flightTime)).toBeFalsy();
  });

  it("long flight", function () {
    const movieTimes = [2, 4];
    const flightTime = 6;
    expect(canTwoMoviesFillFlight(movieTimes, flightTime)).toBeTruthy();
  });

  it("short flight", function () {
    const movieTimes = [3, 8];
    const flightTime = 6;
    expect(canTwoMoviesFillFlight(movieTimes, flightTime)).toBeFalsy();
  });

  it("two movies half flight length", function () {
    const movieTimes = [3, 8, 3];
    const flightTime = 6;
    expect(canTwoMoviesFillFlight(movieTimes, flightTime)).toBeTruthy();
  });

  it("lots of possible pairs", function () {
    const movieTimes = [1, 2, 3, 4, 5, 6];
    const flightTime = 7;
    expect(canTwoMoviesFillFlight(movieTimes, flightTime)).toBeTruthy();
  });

  it("not using first movie", function () {
    const movieTimes = [4, 3, 2];
    const flightTime = 5;
    expect(canTwoMoviesFillFlight(movieTimes, flightTime)).toBeTruthy();
  });

  it("only one movie", function () {
    const movieTimes = [6];
    const flightTime = 6;
    expect(canTwoMoviesFillFlight(movieTimes, flightTime)).toBeFalsy();
  });

  it("no movies", function () {
    const movieTimes = [];
    const flightTime = 2;
    expect(canTwoMoviesFillFlight(movieTimes, flightTime)).toBeFalsy();
  });
});
