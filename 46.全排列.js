/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = [];
  const find = (buffer, idx) => {
    buffer.push(nums[idx]);
    find(buffer, )
  };
  for(let i = 0; i < nums.length; i++) {
    find([], i);
  }
  return ans;
};
// @lc code=end

console.log(permute([1, 2, 3]));
