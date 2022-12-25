/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let ans = 0, left = 0, right = height.length - 1;
  while(left < right) {
    ans = Math.max((right - left) * Math.min(height[left], height[right]), ans);
    if(height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
};
// @lc code=end
