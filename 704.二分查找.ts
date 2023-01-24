/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  // const go = (l: number, r: number): number => {
  //   if(l > r) return -1;
  //   const mid = Math.floor((l + r) / 2);
  //   if(nums[mid] === target) {
  //     return mid;
  //   } else if(nums[mid] > target) {
  //     r = mid - 1;
  //   } else {
  //     l = mid + 1;
  //   }
  //   return go(l, r);
  // }
  // return go(0, nums.length - 1);

  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};
// @lc code=end

