/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let maxCount = -Number.MAX_SAFE_INTEGER,
    numCount = {},
    numLastIndex = {},
    numsFirstIndex = {}, ans = Number.MAX_SAFE_INTEGER;
    // keys = [];

  nums.forEach((item, i) => {
    if (numLastIndex[item] === undefined) {
      numsFirstIndex[item] = i;
      numCount[item] = 1;
    } else {
      numCount[item] += 1;
    }
    maxCount = Math.max(maxCount, numCount[item]);
    numLastIndex[item] = i;
  });

  for (const k in numCount) {
    if (numCount[k] === maxCount) {
      ans = Math.min(ans, numLastIndex[k] - numsFirstIndex[k] + 1);
    }
  }

  return ans;

  // for (const k in numCount) {
  //   if (numCount[k] === maxCount) {
  //     keys.push(k);
  //   }
  // }
  // return keys.reduce(
  //   (ans, curr) => Math.min(ans, numLastIndex[curr] - numsFirstIndex[curr] + 1),
  //   Number.MAX_SAFE_INTEGER
  // );
};
// @lc code=end

console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));
