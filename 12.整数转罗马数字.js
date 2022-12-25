/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  // const map = {
  //   1: "I",
  //   4: "IV",
  //   5: "V",
  //   9: "IX",
  //   10: "X",
  //   40: "XL",
  //   50: "L",
  //   90: "XC",
  //   100: "C",
  //   400: "CD",
  //   500: "D",
  //   900: "CM",
  //   1000: "M",
  // };
  // return helper(map, "", num, num.toString().length - 1);

  let vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roms = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I",
    ],
    ans = "";
  for (let i = 0; num > 0; i++) {
    while (num >= vals[i]) {
      ans += roms[i];
      num -= vals[i];
    }
  }
  return ans;
};

const helper = (map, ans, num, len) => {
  if (!num) return ans;
  const base = 10 ** len,
    maxInt = Math.floor(num / base),
    tmp = maxInt * base;

  if (map[tmp]) {
    return helper(map, ans + map[tmp], num - tmp, len - 1);
  } else {
    const s =
      maxInt < 5
        ? Array(maxInt + 1).join(map[base])
        : map[5 * base] + Array(maxInt - 4).join(map[base]);
    return helper(map, ans + s, num - tmp, len - 1);
  }
};

// @lc code=end
