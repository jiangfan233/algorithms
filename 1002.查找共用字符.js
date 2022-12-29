/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  // let ans = words[0].split("").sort();
  // for(let i = 1; i < words.length; i++) {
  //   const sortedWord = words[i].split("").sort();
  //   ans = findCommom(ans, sortedWord);
  // }
  // return ans;

  let ans = words[0].split("");
  for(let word of words) {
    ans = ans.filter(w => {
      const len = word.length;
      word = word.replace(w, "");
      return word.length < len;
    })
  }
  return ans;
};

const findCommom = (ans, word) => {
  let i = 0;
  while(i < Math.min(ans.length, word.length)) {
    if(ans[i] < word[i]) {
      ans.splice(i, 1)
    } else if(ans[i] === word[i]) {
      i++;
    } else {
      word.splice(i, 1);
    }
  }
  return ans.slice(0, i);

}

// @lc code=end

console.log(commonChars(["cool","lock","cook"]))
