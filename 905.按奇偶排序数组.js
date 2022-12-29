/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  let l = 0, r = 0;
  while(r < nums.length) {
    if(nums[r] % 2 === 0) {
      swap(l, r, nums);
      l++;
    }
    r++;
  }
  return nums;
};

const swap = (l, r, nums) => {
  let tmp = nums[l];
  nums[l] = nums[r];
  nums[r] = tmp;
}

// @lc code=end

