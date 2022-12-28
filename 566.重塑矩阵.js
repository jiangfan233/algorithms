/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  // const rr = mat.length,
  //   cc = mat[0].length;
  // if (rr * cc !== r * c) return mat;
  // const nums = mat.reduce((total, curr) => total.concat(curr), []), ans = Array(r);

  // for (let i = 0; i < nums.length; i++) {
  //   if(!ans[~~(i / c)]) {
  //     ans[~~(i / c)] = [];
  //   }
  //   ans[~~(i / c)][i % c] = nums[i];
  // }
  // return ans;

  // ******************************************

  // const rr = mat.length,
  //   cc = mat[0].length;
  // if (rr * cc !== r * c) return mat;
  // const ans = [];
  // for (let i = 0; i < rr; i++) {
  //   for (let j = 0; j < cc; j++) {
  //     const index = i * cc + j,
  //       tmp = ~~(index / c);
  //     if (!ans[tmp]) {
  //       ans[tmp] = [];
  //     }
  //     ans[tmp][index % c] = mat[i][j];
  //   }
  // }
  // return ans;

  // *********************************************

  // const rr = mat.length,
  //   cc = mat[0].length, sum = rr * cc, ans = [];
  // if (sum !== r * c) return mat;
  // for (let index = 0; index < sum; index++) {
  //   const tmp = ~~(index / c);
  //   if (!ans[tmp]) {
  //     ans[tmp] = [];
  //   }
  //   ans[tmp][index % c] = mat[~~(index / cc)][index % cc];
  // }
  // return ans;

  // *********************************************

  const nums = mat.flat(), ans = [];
  if(r * c !== nums.length) return mat;
  while(nums.length) {
    ans.push(nums.splice(0, c));
  }
  return ans;
};
// @lc code=end

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    2,
    3
  )
);
