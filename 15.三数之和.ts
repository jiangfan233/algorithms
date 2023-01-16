/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let ans: number[][] = [];
  for (let i = 0; i < nums.length-2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (nums[k] === nums[k + 1]) k--;
        while (nums[j] === nums[j - 1]) j++;
      } else if (sum > 0) {
        // nums[k] 太大了
        k--;
        while (nums[k] === nums[k + 1]) k--;
      } else {
        // nums[j] 太小了
        j++;
        while (nums[j] === nums[j - 1]) j++;
      }
    }
  }
  return ans;
}
// @lc code=end
