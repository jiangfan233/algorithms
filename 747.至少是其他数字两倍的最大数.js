/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  // let maxIndex = 0;
  // for (let i = 1; i < nums.length; i++) {
  //   if (nums[maxIndex] < nums[i]) maxIndex = i;
  // }
  // return nums.every((item, i) =>
  //   i !== maxIndex ? item * 2 <= nums[maxIndex] : true
  // )
  //   ? maxIndex
  //   : -1;
  // ****************************************************

  // let ans = -1,
  //   arr = Array.from(new Set(nums)),
  //   maxNum = Math.max(...arr);
  // return nums.every((item, i) =>
  //   item !== maxNum ? item * 2 <= maxNum : (ans = i) || true
  // )
  //   ? ans
  //   : -1;
  // ****************************************************

  // if(nums.length === 1) return 0;
  // let arr = Array.from(new Set(nums)).sort((a, b) => b - a);
  // if(arr[0] < arr[1] * 2) return -1;
  // for(let i=0; i < nums.length; i++) {
  //   if(nums[i] === arr[0]) return i;
  // }
  // return -1;
  // *****************************************************

  let first = Number.MIN_SAFE_INTEGER, second = first, ans = -1;
  for(let i = 0; i< nums.length; i++) {
    if(nums[i] > first) {
      [first, second, ans] = [nums[i], first, i];
    } else if(nums[i] > second) {
      second = nums[i];
    }
  }
  return first >= second * 2 ? ans : -1;
};
// @lc code=end

console.log(dominantIndex([1, 8, 2, 3, 4]));
