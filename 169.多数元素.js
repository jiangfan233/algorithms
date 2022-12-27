/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // T: O(nlogn) S: O(1)
  // nums.sort((a, b) => a - b);
  // return nums[~~(nums.length / 2)];

  // T: O(n) S: O(n)
  // let map = {};
  // for (let i = 0; i < nums.length; i++) {
  //   if (map[nums[i]]) {
  //     map[nums[i]] += 1;
  //     if (map[nums[i]] >= Math.ceil(nums.length / 2)) return nums[i];
  //   } else {
  //     map[nums[i]] = 1;
  //   }
  // }
  // return nums[0];

  // T: O(n) S: O(1)
  let card = nums[0],
    count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === card) {
      count++;
    } else {
      count--;
      if (count == 0) {
        card = nums[i];
        count = 1;
      }
    }
  }
  return card;
};
// @lc code=end
