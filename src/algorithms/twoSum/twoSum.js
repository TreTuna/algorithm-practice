/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function twoSum(nums, target) {
  const comp = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num; /*? */
    if (comp.has(complement)) {
      return [comp.get(complement), i]; /*? */
    }
    comp.set(num, i); /*? */
  }
}

// export function twoSum(nums, target) {
//   for (var i = 0; i < nums.length - 1; i++) {
//     var num1 = nums[i];
//     for (var j = i + 1; j < nums.length; j++) {
//       var num2 = nums[j];
//       if (num1 + num2 === target) {
//         return [i, j];
//       }
//     }
//   }
// }
