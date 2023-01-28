/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
function findMin(nums: number[]): number {
  let l = 0;
  let r = nums.length - 1;
  // let ans = Infinity;
  // while(l <= r) {
  //   const mid = Math.floor((l + r) / 2);
  //   if(nums[mid] >= nums[l] && nums[mid] <= nums[r]) return nums[l];
  //   if(nums[mid] >= nums[l]) {
  //     l = mid + 1;
  //     ans = Math.min(ans, nums[r]);
  //     if(nums[l] < nums[mid]) return nums[l];
  //   } else {
  //     ans = Math.min(ans, nums[mid]);
  //     r = mid - 1;
  //     if(nums[r] > nums[mid]) return nums[mid];
  //   }
  // }
  // return ans;

  // while(l <= r) {
  //   const mid = Math.floor((l + r) / 2);
  //   if(nums[mid] >= nums[l] && nums[mid] <= nums[r]) return Math.min(ans, nums[l]);
  //   if(nums[mid] >= nums[l]) {
  //     l = mid + 1;
  //     ans = Math.min(ans, nums[r]);
  //   } else {
  //     ans = Math.min(ans, nums[mid]);
  //     r = mid - 1;
  //   }
  // }
  // return ans;

  
  /**
   * top voted solution
   * 思路：
   * 如果nums[mid] > nums[r] -> mid右边的元素包含最小值 -> l = mid + 1
   * 如果nums[mid] < nums[r] -> mid以及mid右边的元素升序排列，
   *    nums[r]是一个可能的最小值，r = mid
   * 最终 l === r时，l、r同时指向最小值
   */
  while(l < r) {
    const mid = Math.floor((l + r) / 2);
    if(nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return nums[l];

};
// @lc code=end

