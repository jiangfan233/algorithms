/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // const dfs = (idx, buffer) => {
  //   if(idx >= nums.length) return ans.push(buffer.slice());

  //   dfs(idx + 1, [...buffer, nums[idx]]);
  //   dfs(idx + 1, buffer);
  // }
  // const ans = [];
  // dfs(0, []);
  // return ans;

  //
  // const ans = [[]];
  // for(let num of nums) {
  //   let buffer = [];
  //   for(let entry of ans) {
  //     buffer.push([...entry, num]);
  //   }
  //   ans.push(...buffer);
  // }
  // return ans;

  // let ans = [], n = nums.length;
  // for(let i = 0; i < (1 << n); i++) {
  //   let buffer = [];
  //   for(let j = 0; j < n; j++) {
  //     if(i & (1 << j)) {
  //       buffer.push(nums[j]);
  //     }
  //   }
  //   ans.push(buffer);
  // }
  // return ans;

  function search(buffer, idx) {
    // if (idx >= nums.length) return ans.push(buffer.slice());
    // buffer.push(nums[idx]);
    // search(buffer, idx + 1);
    // buffer.pop();
    // search(buffer, idx + 1);
    ans.push(buffer.slice());
    for(let i = idx; i < nums.length; i++) {
      buffer.push(nums[i]);
      search(buffer, i + 1);
      buffer.pop();
    }
  }
  let ans = [];
  search([], 0);
  return ans;
};
// @lc code=end

console.log(subsets([1, 2, 3]));
