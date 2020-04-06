/**
 * https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/528/week-1/3288/
 * @param {string[]} strs
 * @return {string[][]}
 */
export function groupAnagrams(strs) {
  let anagrams = new Map();

  for (let string of strs) {
    const sortedStr = string.split("").sort().join("");
    if (anagrams.has(sortedStr)) {
      anagrams.get(sortedStr).push(string);
    } else {
      anagrams.set(sortedStr, [string]);
    }
  }

  return [...anagrams.values()];
}
