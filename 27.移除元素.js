/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // let i = 0;
  // while(i < nums.length) {
  //   if(nums[i] === val) {
  //     nums.splice(i, 1);
  //   } else {
  //     i++;
  //   }
  // }
  // return nums.length;

  // let left = 0, right = -1;
  // while(++right < nums.length) {
  //   if(nums[right] !== val) {
  //     nums[left] = nums[right];
  //     left++;
  //   }
  // }
  // return left;

  let left = 0;
  for(let right = 0; right<nums.length; right++) {
    if(nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};
// @lc code=end

