/*
 * @lc app=leetcode.cn id=91 lang=typescript
 *
 * [91] 解码方法
 */

// @lc code=start

function numDecodings(s: string): number {
  if(s[0] === "0") return 0;
  let res = [s[0]];
  for (let i = 1; i < s.length; i++) {
    let tmp : string[] = [];
    res.forEach((item) => {
      if(item.length === 1) {
        let sum = item + s[i];
        if(sum <= "26") {
          tmp.push(sum);
        } 
        if(s[i] !== "0") {
          tmp.push(s[i]);
        }
      } else if(s[i] !== "0") {
        tmp.push(s[i]);
      }
    });
    if(tmp.length === 0) return 0;
    res = tmp;
    // console.log(res)
  }
  return res.length;
}
// @lc code=end

console.log(numDecodings("111111111111111111111111111111111111111111111"))