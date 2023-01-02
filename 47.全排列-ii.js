/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const swap = (i, j, arr) => {
  const tmp = arr.slice(),
    item = arr[i];
  tmp[i] = tmp[j];
  tmp[j] = item;
  return tmp;
};

var permuteUnique = function (nums) {
  // nums.sort((a, b) => a - b);
  // let ans = [nums];

  // const generate = (idx) => {
  //   let buffer = [];
  //   for(let arr of ans) {
  //     for(let i = idx + 1; i < arr.length; i++) {
  //       if(arr[idx] < arr[i]) {
  //         buffer.push(swap(idx, i, arr));
  //       }
  //     }
  //   }
  //   return buffer;
  // }

  // for(let i = 0; i < nums.length - 1; i++) {
  //   ans.push(...generate(i));
  // }

  // return ans;

  const search = (buffer, used, idx) => {
    if (idx === nums.length) return ans.push(buffer.slice());

    for (let i = 0; i < nums.length; i++) {
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]))
        continue;
      buffer.push(nums[i]);
      used[i] = true;
      // console.log("吃", i, buffer, used);

      search(buffer, used, idx + 1);

      buffer.pop();
      used[i] = false;
      // console.log("吐", i, buffer, used);
    }
  };

  nums.sort((a, b) => a - b);
  let ans = [];
  search([], Array(nums.length).fill(false), 0);

  return ans;
};
// @lc code=end

console.log(permuteUnique([1, 1, 2]));
