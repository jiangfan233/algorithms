/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // let ans = [],
  //   buffer = [];

  // search(candidates, 0, buffer, ans, target);
  // return ans;

  let ans = [];
  const dfs = (idx, buffer, target) => {
    if(idx >= candidates.length || target < 0) return;
    if(target === 0) return ans.push(buffer.slice());

    if(candidates[idx] <= target) {
      dfs(idx, [...buffer, candidates[idx]], target - candidates[idx]);
    }
    dfs(idx + 1, buffer, target);
  }

  dfs(0, [], target);
  return ans;
};

const search = (nums, startIndex, buffer, ans, num) => {
  if (num === 0) return ans.push(buffer.slice());
  if (startIndex >= nums.length || num < 0) return;

  buffer.push(nums[startIndex]);
  search(nums, startIndex, buffer, ans, num - nums[startIndex]);

  buffer.pop();
  search(nums, startIndex + 1, buffer, ans, num);
};

// @lc code=end

console.log(combinationSum([3, 5, 8], 11));
