/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  let ans = [];
  for (let r = 0; r < img.length; r++) {
    ans.push([]);
    for (let c = 0; c < img[r].length; c++) {
      ans[r][c] = getNum(r, c, img);
    }
  }
  return ans;
};

const getNum = (r, c, img) => {
  let sum = 0,
    count = 0;
  for (let i = Math.max(0, r - 1); i <= Math.min(r + 1, img.length - 1); i++) {
    for (
      let j = Math.max(0, c - 1);
      j <= Math.min(c + 1, img[0].length - 1);
      j++
    ) {
      sum += img[i][j];
      count++;
    }
  }
  return Math.floor(sum / count);
};

// @lc code=end

console.log(imageSmoother([[100,200,100],[200,50,200],[100,200,100]]))
// console.log(
//   getNum(1, 1, [
//     [0, 1, 2],
//     [3, 4, 5],
//   ])
// );
