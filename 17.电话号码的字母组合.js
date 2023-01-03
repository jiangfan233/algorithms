/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

const map = {
  undefined: [],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

const pair = (arrA, arrB) => {
  if (!arrA.length) return arrB;
  if (!arrB.length) return arrA;
  const ans = [];
  for (let l of arrA) {
    for (let r of arrB) {
      ans.push(l + r);
    }
  }
  return ans;
};

var letterCombinations = function (digits) {
  // return digits.split("").reduce((ans, d, i) => pair(ans, map[d]), []);

  // const search = (buffer, idx) => {
  //   if(idx === digits.length) return ans.push(...buffer);
  //   search(pair(buffer, map[digits[idx]]), idx + 1);
  // }

  // let ans = [];
  // search([], 0);
  // return ans;

  const search = (buffer, idx) => {
    if (idx === digits.length) return ans.push(buffer);

    const charArray = map[digits[idx]];
    // 循环也是一种回溯
    for (let i = 0; i < charArray.length; i++) {
      search(buffer + charArray[i], idx + 1);
    }
  };

  if(digits.length === 0) return [];
  const ans = [];

  // 下面的这层循环也可视为 search 循环中的一种情况
  // const arr = map[digits[0]];
  // for (let i = 0; i < arr.length; i++) {
  //   search(arr[i], 1);
  // }
  search("", 0);
  return ans;
};
// @lc code=end

console.log(letterCombinations("234"));
