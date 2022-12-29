/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  // licensePlate = licensePlate.toLowerCase();
  // let letters = {}, ans = "";
  // for(let w of licensePlate) {
  //   if(w >= "a" && w <= "z") {
  //     if(letters[w]) letters[w] ++;
  //     else letters[w] = 1;
  //   }
  // }
  // for(let word of words) {
  //   const memo = {};
  //   for(let w of word) {
  //     if(memo[w]) memo[w]++;
  //     else memo[w] = 1;
  //   }
  //   if(Object.keys(letters).every(k => memo[k] >= letters[k])) {
  //     if(ans.length) ans = word.length < ans.length ? word : ans;
  //     else ans = word;
  //   }
  // }
  // return ans;

  // licensePlate = licensePlate.toLowerCase();
  // let letters = [], ans = null;
  // for(let w of licensePlate) {
  //   if(w >= "a" && w <= "z") {
  //     letters.push(w);
  //   }
  // }
  let letters = licensePlate.toLowerCase().replace(/[^a-z]/g, "").split(""), ans = null;
  for(let i = 0; i < words.length; i++) {
    const tmp = letters.reduce((word, letter) => word.replace(letter, ""), words[i]);
    
    if(tmp.length + letters.length === words[i].length) {
      if(ans === null) ans = i;
      else ans = words[i].length < words[ans].length ? i : ans; 
    }
  }
  return words[ans];
};
// @lc code=end


console.log(shortestCompletingWord("1s3 PSt", ["step","steps","stripe","stepple"]));