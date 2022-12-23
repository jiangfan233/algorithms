/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  // let count = 0;
  // for(let i=s.length-1; i>=0; i--) {
  //   if(s[i] != " ") {
  //     count++;
  //   } else if(count > 0) {
  //     return count;
  //   }
  // }
  // return count;

  // return s.trimEnd().split(" ").reverse()[0].length;

  const ss = s.trimEnd();
  for(let i=ss.length-1; i>=0; i--) {
    if(ss[i] === " ") {
      return ss.length - i - 1;
    } 
  }
  return ss.length;
};
// @lc code=end

