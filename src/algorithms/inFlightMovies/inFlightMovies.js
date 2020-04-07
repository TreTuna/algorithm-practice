export function canTwoMoviesFillFlight(movieTimes, flightLength) {
  const times = new Set(movieTimes);

  return movieTimes.reduce(
    (acc, num) => (acc = times.has(flightLength - num)),
    false
  );
}
