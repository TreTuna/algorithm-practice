/**
 * https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/530/week-3/3304/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

export function search(nums, target) {
  if (nums.length < 2) return nums[0] === target ? 0 : -1;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((end + start) / 2);
    let middleNum = nums[middle];
    if (middleNum === target) {
      return middle;
    } else {
      if (nums[start] <= middleNum) {
        if (middleNum > target && target >= nums[start]) {
          end = middle - 1;
        } else {
          start = middle + 1;
        }
      } else {
        if (middleNum < target && target <= nums[end]) {
          start = middle + 1;
        } else {
          end = middle - 1;
        }
      }
    }
  }

  return -1;
}
