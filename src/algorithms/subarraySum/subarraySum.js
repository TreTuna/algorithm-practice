/**
 * https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/531/week-4/3307/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

export function subarraySum(nums, k) {
  const counts = new Map([[0, 1]]);
  let sum = 0;
  let count = 0;
  for (let num of nums) {
    sum += num;
    count += counts.get(sum - k) || 0;
    counts.set(sum, (counts.get(sum) || 0) + 1);
  }

  return count;
}

// function subarraySum(nums, k){
// 	let sums = 0;
//   for(let i = 0; i < nums.length; i++){
//     let sum = 0;
//     for(let j = i; j < nums.length; j++){
//       sum += nums[j];
//       if(sum === k){
//         sums++
//       }
//     }
//   }
// 	return sums;
// }

// function subarraySum(nums, k){
//   let sum = 0;
//   let count = 0;
//   const counts = {0: 1};
//   for(let i = 0; i < nums.length; i++){
//     sum += nums[i];
//     if(counts[sum - k]){
//       count += counts[sum - k];
//     }
//     counts[sum] = (counts[sum] ? counts[sum] : 0) + 1
//   }
//   return count;
// }
