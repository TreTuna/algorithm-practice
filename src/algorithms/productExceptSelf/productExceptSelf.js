/**
 * https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/530/week-3/3300/
 * @param {number[]} nums
 * @return {number[]}
 */
export function productExceptSelf(nums) {
  const results = new Array(nums.length).fill(1);
  let productL = 1;
  let productR = 1;

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    results[i] *= productL;
    results[j] *= productR;
    productL *= nums[i];
    productR *= nums[j];
  }

  return results;
}
