/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  const cache = {};

  let i = -1;
  while(++i < nums.length) {
    const x = target - nums[i];
    if(cache[x] !== undefined) {
      return [i, cache[x]];
    } else {
      cache[nums[i]] = i;
    }
  }
};
// @lc code=end

