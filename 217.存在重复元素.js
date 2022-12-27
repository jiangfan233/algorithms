/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // return Array.from(new Set(nums)).length !== nums.length;
  return new Set(nums).size !== nums.length;
 
  // let map = {};
  // for(let i = 0; i<nums.length; i++) {
  //   if(map[nums[i]]) {
  //     return true;
  //   } else {
  //     map[nums[i]] = 1;
  //   }
  // }
  // return false;

  // nums.sort((a, b) => a - b);
  // for(let i = 1; i< nums.length; i++) {
  //   if(nums[i-1] === nums[i]) return true;
  // }
  // return false;
};
// @lc code=end

