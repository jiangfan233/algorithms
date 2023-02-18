/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  let [fast, slow] = [nums[nums[nums[0]]], nums[nums[0]]];
  while(fast !== slow) {
    fast = nums[nums[fast]];
    slow = nums[slow];
  }

  fast = nums[0];
  while(fast !== slow) {
    fast = nums[fast];
    slow = nums[slow];
  }
  return fast;
};
// @lc code=end
