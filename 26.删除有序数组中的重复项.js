/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // let map = {}, i = 0;
  // while(nums[i] !== undefined) {
  //   if(map[nums[i]] !== undefined) {
  //     nums.splice(i, 1);
  //   } else {
  //     map[nums[i]] = i;
  //     i++;
  //   }
  // }

  // 集合法
  // const set = new Set(nums);
  // let i = 0;
  // set.forEach(val => {
  //   nums[i] = val;
  //   i++;
  // })
  // return set.size;

  // 双指针
  let left = 0, right = 0, len = nums.length;
  while(++right < len) {
    if(nums[left] != nums[right]) {
      nums[++left] = nums[right]
    }
  }
  
  return left+1;
};
// @lc code=end

