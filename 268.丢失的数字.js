/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // nums.sort((a, b) => a - b);
  // let count = 0;
  // for (let i = 0; i <= nums.length; i++) {
  //   if (count++ !== nums[i]) return count - 1;
  // }

  // const counts = new Array(nums.length+1);
  // for (let i = 0; i < nums.length; i++) {
  //   counts[nums[i]] = 1;
  // }
  // for(let i = 0; i < counts.length; i++) {
  //   if(!counts[i]) return i;
  // }

  // 等差数列
  // 0~n之和 - nums之和
  return (
    ((nums.length + 1) * (0 + nums.length)) / 2 -
    nums.reduce((sum, curr) => sum + curr, 0)
  );

  //   // 异或运算
  // let ans = nums.length;
  // for (let i = 0; i < nums.length; i++) {
  //   // 原理
  //   // 异或运算满足交换律和结合律：3 ^ 9 ^ 8 ^ 9 ^ 8 = (9 ^ 9) ^ (8 ^ 8) ^ 3 = 3
  //   // 数A做偶数次异或运算， 结果为A： A ^ A ^ A ^ A = 0
  //   // 数A做奇数次异或运算， 结果为A： A ^ A ^ A = A

  //   // 题解：
  //   // 如果把 0~n、0~n中的所有数字均出现偶数次，做异或运算结果为0
  //   // nums比0~n缺少一个数ans，那么 0~n、nums中所有数做异或运算，
  //   // 结果为ans
  //   // 运算顺序：ans = ans ^ (i ^ nums[i])
  //   ans ^= i ^ nums[i];
  //   // ans ^= nums[i];
  // }
  // return ans;
};
// @lc code=end

console.log(missingNumber([2, 1, 3]));
