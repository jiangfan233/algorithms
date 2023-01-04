/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */

function transform(code, i) {
  const tmp = code.split("");
  tmp[i] = "1";
  return tmp.join("");
}

var grayCode = function (n) {
  // return Array(n)
  //   .fill("")
  //   .reduce(
  //     (ans, _, i) => {
  //       return ans.concat(
  //         ans
  //           .slice()
  //           .map((code) => transform(code, i))
  //           .reverse()
  //       );
  //     },
  //     [Array(n).fill("0").join("")]
  //   )
  //   .map((item) => parseInt(item, 2));

  const ret = [0];
  for (let i = 1; i <= n; i++) {
    const m = ret.length;
    for (let j = m - 1; j >= 0; j--) {
      ret.push(ret[j] | (1 << (i - 1)));
    }
  }
  return ret;

  // let ans = [], maxIndex = 1 << n;
  // for(let i = 0; i < maxIndex; i++) {
  //   ans.push(i ^ (i >> 1));
  // }
  // return ans;
};
// @lc code=end

console.log(grayCode(3));
