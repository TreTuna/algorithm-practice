/**
 * https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/529/week-2/3299/
 * @param {number[]} prices
 * @return {number}
 */

export function stringShift(s, shift) {
  const moves =
    shift.reduce((steps, [direction, num]) => {
      return steps + (direction ? -num : num);
    }, 0) % s.length;

  return s.slice(moves) + s.slice(0, moves);
}

// export function stringShift(s, shift) {
//   let moves = 0; /*? */
//   shift.forEach(([direction, amount]) => {
//     if (direction) {
//       moves += amount;
//     } else {
//       moves -= amount;
//     }
//   });

//   moves = moves % s.length; /*? */

//   if (moves < 0) {
//     return s.slice(-moves) + s.slice(0, -moves); /*? */
//   } else if (moves > 0) {
//     return s.slice(s.length - moves) + s.slice(0, s.length - moves); /*? */
//   }

//   return s;
// }

// Iterative exponential version
// export function stringShift(s, shift) {
//   const sArr = s.split(""); /*? */

//   shift.forEach((shift) => {
//     const direction = shift[0] === 0 ? "left" : "right"; /*? */
//     let amount = shift[1]; /*? */

//     while (amount > 0) {
//       if (direction === "left") {
//         sArr.push(sArr.shift());
//       } else {
//         sArr.unshift(sArr.pop());
//       }
//       amount--;
//     }
//   });

//   return sArr.join(""); /*? */
// }
