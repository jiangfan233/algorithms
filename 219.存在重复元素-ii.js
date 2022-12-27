/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // let map = {};
  // for (let i = 0; i < nums.length; i++) {
  //   if (i - map[nums[i]] <= k) {
  //     return true;
  //   } else {
  //     map[nums[i]] = i;
  //   }
  // }
  // return false;

  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};
// @lc code=end
