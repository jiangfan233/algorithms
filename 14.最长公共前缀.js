/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

  // if(strs.length === 1) return strs[0];

  // let res = strs[0], i = 0, len = strs.length, end = strs[0].length-1;

  // while(++i < len) {
  //   for(let j=end; j>=0; j--) {
  //     if(strs[i][j] !== res[j]) {
  //       end = j-1;
  //     }
  //   }
  // }

  // return res.slice(0, end+1);


  strs.sort();
  const first = strs[0], last = strs[strs.length - 1];

  let i = 0;
  while(i < first.length && first[i] === last[i]) {
    i++;
  }
  return first.slice(0, i);
};
// @lc code=end

