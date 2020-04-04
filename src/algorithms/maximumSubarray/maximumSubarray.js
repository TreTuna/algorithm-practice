/**
 * https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/528/week-1/3285/
 * @param {number[]} nums
 * @return {number}
 */

export function maxSubArray(nums) {
  let max = nums[0];
  let maxSoFar = max;

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    maxSoFar = Math.max(current, current + maxSoFar);
    max = Math.max(max, maxSoFar);
  }

  return max;
}
