/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // nums.sort((a, b) => a - b);
  // let ans = [],
  //   used = Array(nums.length).fill(false);

  // const search = (buffer, i) => {
  //   if (i >= nums.length) return ans.push(buffer.slice());
  //   if (i === 0 || nums[i] !== nums[i - 1] || used[i - 1]) {
  //     used[i] = true;
  //     search([...buffer, nums[i]], i + 1);
  //   }
  //   used[i] = false;
  //   search(buffer, i + 1);
  // };
  // search([], 0);
  // return ans;

  let ans = [];
  const search = (buffer, arr) => {
    // console.log(buffer, arr)
    ans.push(buffer.slice());
    for (let i = 0; i < arr.length; i++) {
      if (i === 0 || arr[i] !== arr[i - 1]) {
        buffer.push(arr[i]);
        search(buffer, arr.slice(i + 1));
        buffer.pop();
      }
    }
  };
  nums.sort((a,b)=>{return a-b});
  search([], nums);
  return ans;
};
// @lc code=end

console.log(subsetsWithDup([1, 2, 2]));
