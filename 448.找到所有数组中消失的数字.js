/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let ans = [];

  // nums.forEach(item => {
  //   const index = Math.abs(item) - 1;
  //   if(nums[index] > 0) {
  //     nums[index] *= -1;
  //   }
  // })
  
  // for(let i=0; i<nums.length; i++) {
  //   if(nums[i] > 0) {
  //     ans.push(i+1);
  //   }
  // }

  for(let i=0; i<nums.length; i++) {
    const index = (nums[i] - 1) % nums.length;
    nums[index] += nums.length;
  }
  for(let i=0; i<nums.length; i++) {
    if(nums[i] <= nums.length) {
      ans.push(i+1);
    }
  }

  return ans;
};
// @lc code=end

console.log(findDisappearedNumbers([5,4,6,7,9,3,10,9,5,6]));
