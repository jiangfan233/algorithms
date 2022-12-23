/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  return helper(a, b, 1, 0, "");

  // const aBin = `0b${a}`;
  // const bBin = `0b${b}`;
  // const sum = BigInt(aBin) + BigInt(bBin);
  // return sum.toString(2); 
};

function helper(a, b, index, flag, ans) {
  if (a.length >= index || b.length >= index || flag) {
    const { bit, f } = getBit(a[a.length - index], b[b.length - index], flag);
    return helper(a, b, index + 1, f, bit + ans);
  }
  return ans;
}

const map = {
  0: 0,
  1: 1,
  undefined: 0,
};

function getBit(a, b, flag) {

  switch (map[a] + map[b] + map[flag]) {
    case 0:
      return { bit: 0, f: 0 };
    case 1:
      return { bit: 1, f: 0 };
    case 2:
      return { bit: 0, f: 1 };
    default:
      return { bit: 1, f: 1 };
  }
}

// @lc code=end
