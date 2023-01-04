/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let ans = [];
  const search = (buffer, idx) => {
    if (buffer.length >= k) return ans.push(buffer.slice());
    // if (idx > n || (buffer.length === 0 && idx > n - k + 1)) return;
    
    // buffer的长度 + [idx, n] 的长度区间  小于k，不可能产生长度为k的数组
    if(buffer.length + (n - idx + 1) < k) return;

    buffer.push(idx);
    search(buffer, idx + 1);

    buffer.pop();
    search(buffer, idx + 1);
  };
  search([], 1);
  return ans;
};
// @lc code=end

console.log(combine(4, 3));
