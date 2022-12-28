/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 解法一
  for (let r = 1, l = 0; r < nums.length; r++) {
    if (nums[l] !== 0) {
      l++;
      // 不需要continue的原因：
      // 此时 l 最大等于r，仍不满足 nums[l] === 0 && nums[r] !== 0
      // continue;
    }
    if (nums[l] === 0 && nums[r] !== 0) {
      nums[l] = nums[r];
      nums[r] = 0;
      l++;
    }

    // if(nums[r] || nums[l]) {
    //   if(nums[l] === 0) {
    //     nums[l] = nums[r];
    //     nums[r] = 0;
    //   }
    //   l++;
    // }
  }

  // 解法二
  // let l = 0;
  // for(let r = 0; r<nums.length; r++) {
  //   if(nums[r]) nums[l++] = nums[r];
  // }
  // for(let i=l; i<nums.length; i++) {
  //   nums[i] = 0;
  // }

  return nums;
};
// @lc code=end

console.log(moveZeroes([1, 0, 1]));
