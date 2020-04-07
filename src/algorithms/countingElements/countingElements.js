/**
 * https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3289/
 * @param {number[]} arr
 * @return {number}
 */
// export function countElements(arr) {
//   const dict = new Set();
//   let result = 0;
//   arr.forEach((num) => dict.add(num));
//   arr.forEach((num) => {
//     if (dict.has(num + 1)) {
//       result++;
//     }
//   });
//   return result;
// }

// export function countElements(arr) {
//   const dict = new Set(arr);
//   return arr.reduce((acc, num) => {
//     if (dict.has(num + 1)) {
//       return acc + 1;
//     }
//     return acc;
//   }, 0);
// }

export function countElements(arr) {
  let set = new Set(arr);
  return arr.reduce((num, i) => num + (set.has(i + 1) ? 1 : 0), 0);
}
