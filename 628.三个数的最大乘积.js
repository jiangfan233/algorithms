/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  // nums.sort((a, b) => b - a);
  // return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[nums.length - 1] * nums[nums.length - 2]);
  // ****************************************

  // 思路三个正数相乘 或者 一个正数两个负数相乘
  // if (nums.length === 3) return nums[0] * nums[1] * nums[2];
  let max1 = -Infinity,
    max2 = -Infinity,
    max3 = -Infinity,
    min1 = Infinity,
    min2 = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] > max1) {
      [max1, max2, max3] = [nums[i], max1, max2];
    } else if(nums[i] > max2) {
      [max2, max3] = [nums[i], max2];
    } else if(nums[i] > max3) {
      max3 = nums[i];
    }
    if(nums[i] < min1) {
      [min1, min2] = [nums[i], min1];
    } else if(nums[i] < min2) {
      min2 = nums[i];
    }
    
  }
  return Math.max(max1 * max2 * max3, max1 * min1 * min2);
};
// @lc code=end

console.log(maximumProduct([-1, -2, -3, -4]));
