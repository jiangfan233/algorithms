/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const map: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack: string[] = [];

  for (let c of s) {
    if (map[c]) {
      // c是左半边
      stack.push(c);
    } else if (map[stack.pop()!] !== c) {
      // c是右半边
      return false;
    }
  }
  return stack.length === 0;
}
// @lc code=end
