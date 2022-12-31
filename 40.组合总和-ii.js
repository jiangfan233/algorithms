/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const ans = [];
  candidates.sort((a, b) => a - b);

  const dfs = (buffer, idx, target) => {
    if (target === 0) return ans.push(buffer.slice());
    if (idx >= candidates.length || target < 0 || target < candidates[idx])
      return;

    // 消化当前值
    if (candidates[idx] <= target) {
      dfs([...buffer, candidates[idx]], idx + 1, target - candidates[idx]);
    }

    // 跳过当前值，并跳过当前值的重复值
    while (candidates[idx + 1] === candidates[idx]) idx++;
    dfs(buffer, idx + 1, target);
  };

  dfs([], 0, target);
  return ans;
};
// @lc code=end

console.log(combinationSum2([1, 2, 2, 2, 5], 5));
