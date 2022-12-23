/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // if(nums[nums.length-1] < target) return nums.length;
  // if(nums[0] >= target) return 0;

  // let left = 0, right = nums.length - 1;
  // while(left + 1 < right) {
  //   // const mid = ~~((left + right) / 2);
  //   // 位移运算优先级低于加减运算
  //   const mid = left + right >> 1;

  //   if(nums[mid] === target) {
  //     return mid;
  //   } else if(nums[mid] < target) {
  //     left = mid;
  //   } else {
  //     right = mid;
  //   }
  // }
  // return left + 1;

  // let left = 0, right = nums.length - 1;
  // // 搞清楚 left === right 情况
  // while(left <= right) {
  //   const mid = left + right >> 1;
  //   if(nums[mid] === target) {
  //     return mid;
  //   } else if(nums[mid] < target) {
  //     left = mid + 1;
  //   } else {
  //     right = mid - 1;
  //   }
  // }
  // return left;

  return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(nums, target, start, end) {
  if (start > end) return start;

  const mid = (start + end) >> 1;

  if (nums[mid] === target) return mid;
  if (nums[mid] > target) return binarySearch(nums, target, start, mid - 1);
  if (nums[mid] < target) return binarySearch(nums, target, mid + 1, end);
}

// @lc code=end
