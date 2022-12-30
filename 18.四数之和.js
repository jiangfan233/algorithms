/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let a = 0,
    b,
    c,
    d,
    ans = [];

  while (a < nums.length - 3) {
    b = a + 1;
    while (b < nums.length - 2) {
      c = b + 1;
      d = nums.length - 1;

      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d];
        if (sum > target) {
          d--;
          while (nums[d] === nums[d + 1]) d--;
        } else if (sum < target) {
          c++;
          while (nums[c] === nums[c - 1]) c++;
        } else {
          ans.push([nums[a], nums[b], nums[c], nums[d]]);
          c++;
          d--;
          while (nums[c] === nums[c - 1]) c++;
          while (nums[d] === nums[d + 1]) d--;
        }
      }

      b++;
      while (nums[b] === nums[b - 1]) b++;
    }

    a++;
    while (nums[a] === nums[a - 1]) a++;
  }
  return ans;
};
// @lc code=end

console.log(
  fourSum([-7, -5, 0, 7, 1, 1, -10, -2, 7, 7, -2, -6, 0, -10, -5, 7, -8, 5], 28)
);
