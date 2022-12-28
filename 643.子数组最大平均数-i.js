/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // let ans = nums.slice(0, k).reduce((sum, curr) => sum + curr, 0);
  // for (let i = k; i < nums.length; i++) {
  //   if (nums[i] > nums[i - k]) {
  //     ans = Math.max(
  //       ans,
  //       nums.slice(i - k + 1, i + 1).reduce((sum, curr) => sum + curr, 0)
  //     );
  //   }
  // }
  // return ans / k;

  // let l = 0;
  // for (let i = k; i < nums.length; i++) {
  //   const tmp = i - k + 1;
  //   if (
  //     nums[i] > nums[tmp - 1] &&
  //     nums.slice(l, Math.min(l + k, tmp)).reduce((sum, curr) => sum + curr, 0) <
  //       nums
  //         .slice(Math.max(l + k, tmp), i + 1)
  //         .reduce((sum, curr) => sum + curr, 0)
  //   ) {
  //     l = tmp;
  //   }
  // }

  // return nums.slice(l, l + k).reduce((sum, curr) => sum + curr, 0) / k;

  // ***********************************

  let sum = nums.slice(0, k).reduce((sum, curr) => sum + curr, 0), prev = sum;

  for(let i = 1; i <= nums.length - k; i++) {
    // sums.unshift(sums[0] + nums[i + k - 1] - nums[i - 1]);
    prev += nums[i + k - 1] - nums[i - 1];
    sum = Math.max(prev, sum);
  }
  return sum / k;
};

// @lc code=end

console.log(findMaxAverage([1, 12, -5, -6, 50, 3, 999], 4));
