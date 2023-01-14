/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // if(s.length !== t.length) return false;
  // const c1 = s.split("").sort();
  // const c2 = t.split("").sort();
  // let i = 0;
  // while(i < c1.length) {
  //   if(c1[i] !== c2[i]) return false;
  //   i++;
  // }
  // return true;

  if(s.length !== t.length) return false;
  const map = {};
  for(let char of s) {
    if(map[char]) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }
  for(let c of t) {
    if(map[c] === undefined) return false;
    map[c] -= 1;
    if(map[c] < 0) return false;
  }
  return true;
};
// @lc code=end

console.log(isAnagram("rat", "tra"))

