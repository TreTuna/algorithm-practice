/**
 * https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/528/week-1/3286/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

export function moveZeroes(nums) {
  let readPointer = 0;
  let writePointer = 1;
  while (writePointer < nums.length) {
    const first = nums[readPointer];
    const second = nums[writePointer];

    if (first === 0 && second !== 0) {
      swap(nums, readPointer, writePointer);
    } else if (first === 0 && second === 0) {
      writePointer++;
    } else {
      readPointer++;
      writePointer++;
    }
  }
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}
