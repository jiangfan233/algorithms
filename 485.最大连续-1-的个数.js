/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  // let ans = 0;
  // for (let r = 1, l = r - 1; r <= nums.length; r++) {
  //   if (!nums[r] && nums[l]) {
  //     ans = Math.max(r - l, ans);
  //     l = r;
  //   } else if(!nums[l]) {
  //     l = r;
  //   }
  // }
  // return ans;

  let ans = 0, count=0;
  for(let r=0; r < nums.length; r++) {
    ans = Math.max(ans, count+=nums[r]);
    if(!nums[r]) count = 0;
  }
  return ans;

  // return nums.join("").split("0").reduce((max, curr) => Math.max(max, curr.length), 0);
};
// @lc code=end
