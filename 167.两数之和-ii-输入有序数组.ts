/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  let l = 0, r = numbers.length - 1;
  while(l < r) {
    const sum = numbers[l] + numbers[r];
    if(sum === target) {
      return [l+1, r+1];
    } else if(sum > target) {
      r--;
    } else {
      l++;
    }
  }
  return [l+1, r+1];
};
// @lc code=end

