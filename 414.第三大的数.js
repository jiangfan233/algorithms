/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  // T: O(nlogn)
  // const set = new Set(nums);
  // if(set.size < 3) return Math.max(...nums);
  // return Array.from(set).sort((a, b) => b - a)[2];

  let ans = [nums[0], Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === ans[0] || nums[i] === ans[1] || nums[i] === ans[2])
      continue;

    if (nums[i] > ans[0]) {
      // ans.unshift(nums[i]);
      [ans[0], ans[1], ans[2]] = [nums[i], ans[0], ans[1]];
    } else if (nums[i] > ans[1]) {
      // ans.splice(1, 0, nums[i]);
      [ans[2], ans[1]] = [ans[1], nums[i]];
    } else if (nums[i] > ans[2]) {
      ans[2] = nums[i];
    }
  }
  return ans[2] === Number.MIN_SAFE_INTEGER ? ans[0] : ans[2];

  // let first = Number.MIN_SAFE_INTEGER,
  //   second = Number.MIN_SAFE_INTEGER,
  //   third = Number.MIN_SAFE_INTEGER;

  // for(let i=0; i<nums.length; i++) {
  //   if(nums[i] === first || nums[i] === second || nums[i] === third) continue;

  //   if(nums[i] > first) {
  //     [first, second, third] = [nums[i], first, second];
  //   } else if(nums[i] > second) {
  //     [second, third] = [nums[i], second];
  //   } else if(nums[i] > third) {
  //     third = nums[i];
  //   }
  // }
  // return third === Number.MIN_SAFE_INTEGER ? first : third;
};
// @lc code=end

console.log(thirdMax([2, 3, 2, 1]));
