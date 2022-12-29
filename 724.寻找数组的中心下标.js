/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  // let right = nums.reduce((sum, curr, i) => {
  //     if (i === 0) {
  //       return sum;
  //     } else {
  //       return sum + curr;
  //     }
  //   }, 0),
  //   left = 0;

  // for (let i = 0; i < nums.length; i++) {
  //   if (left !== right) {
  //     if (i === nums.length - 1) return -1;
  //     left += nums[i];
  //     if (i + 1 < nums.length) right -= nums[i + 1];
  //   } else {
  //     return i;
  //   }
  // }
  // return -1;

  let right = nums.reduce((sum, curr) => sum + curr, 0), left = 0;
  for(let i = 0; i<nums.length; i++) {
    const num = nums[i];
    right -= num;
    if(right === left) return i;
    left += num;
  }
  return -1;
};
// @lc code=end

console.log(pivotIndex([2, -1, 1]));
