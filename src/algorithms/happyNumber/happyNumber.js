/**
 * leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3284/
 * @param {number} n
 * @return {boolean}
 */

export function isHappy(num) {
  if (num === 1) {
    return true;
  }

  const seen = new Set();
  let currentNum = num;

  while (!seen.has(currentNum)) {
    const nextNum = addDigits(currentNum);
    if (nextNum === 1) {
      return true;
    }
    seen.add(currentNum);
    currentNum = nextNum;
  }
  return false;
}

function addDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, num) => {
      const numSq = num * num;
      return numSq + acc;
    }, 0);
}
