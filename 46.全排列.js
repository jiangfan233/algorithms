/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const swap = (idx, i, nums) => {
  const item = nums[idx],
    arr = nums.slice();
  arr[idx] = arr[i];
  arr[i] = item;
  return arr;
};

var permute = function (nums) {
  /**
   * 对于nums: [1,2,3,4]中的第一个数1，有4(nums.length)种放置方式
   * 对于第二个数2，有3种放置方式
   * 对于 nums[i]，有 nums.length - i 种放置方式
   */
  // const ans = [nums];

  // const generate = (idx, ans) => {
  //   let buffer = [];
  //   for (let arr of ans) {
  //     for (let i = idx + 1; i < nums.length; i++) {
  //       buffer.push(swap(idx, i, arr));
  //     }
  //   }
  //   return buffer;
  // };

  // for(let i = 0; i < nums.length - 1; i++) {
  //   ans.push(...generate(i, ans));
  // }

  // return ans;

  return nums.reduce(
    (ans, num, i) => {
      const buffer = [];
      for (let arr of ans) {
        for (let j = i + 1; j < nums.length; j++) {
          buffer.push(swap(i, j, arr));
        }
      }
      return ans.concat(buffer);
    },
    [nums]
  );

  // **************************************************

  // const ans = [nums];
  // const generate = (idx) => {
  //   let len = ans.length;
  //   for (let j = 0; j < len; j++) {
  //     for (let i = idx + 1; i < nums.length; i++) {
  //       ans.push(swap(idx, i, ans[j]));
  //     }
  //   }
  // };
  // for (let i = 0; i < nums.length - 1; i++) {
  //   generate(i);
  // }
  // return ans;

  // **************************************************

  // 搜索回溯
  // let ans = [];
  // const dfs = (buffer, used) => {
  //   if(buffer.length === nums.length) return ans.push(buffer.slice());

  //   for(let i = 0; i < nums.length; i++) {
  //     if(used[i]) continue;

  //     // 吃
  //     buffer.push(nums[i]);
  //     used[i] = true;

  //     dfs(buffer, used);

  //     // 吐
  //     used[i] = false;
  //     buffer.pop();
  //   }
  // }

  // dfs([], Array(nums.length).fill(false));
  // return ans;
};
// @lc code=end

console.log(permute([1, 2, 3]));
