/*
 * @lc app=leetcode.cn id=567 lang=typescript
 *
 * [567] 字符串的排列
 */

// @lc code=start
function checkInclusion(s1: string, s2: string): boolean {
  // const chars2 = s2.split("");
  // const chars1 = s1.split("").sort();
  // for(let i = 0; i <= s2.length - s1.length; i++) {
  //   if(chars2.slice(i, i + s1.length).sort().every((c, i) => c === chars1[i])) {
  //     return true;
  //   }
  // }
  // return false;

  // const map: { [key: string]: number } = {};
  // for (let c of s1) {
  //   if (map[c] === undefined) {
  //     map[c] = 0;
  //   }
  //   map[c] += 1;
  // }
  // const check = (start: number, i: number): boolean => {
  //   if (i >= s1.length) return true;
  //   const c = s2[start + i];
  //   if (map[c] !== undefined && map[c] > 0) {
  //     map[c] -= 1;
  //     const flag = check(start, i + 1);
  //     if (flag) return true;
  //     map[c] += 1;
  //   }
  //   return false;
  // };
  // for (let i = 0; i < s2.length; i++) {
  //   if (map[s2[i]] !== undefined) {
  //     const flag = check(i, 0);
  //     if (flag) return true;
  //   }
  // }
  // return false;

  const chars = Array(26).fill(0);
  for (let c of s1) {
    chars[c.charCodeAt(0) - 97]++;
  }
  for (let i = 0; i < s2.length; i++) {
    chars[s2[i].charCodeAt(0) - 97]--;
    if (i >= s1.length) {
      chars[s2[i - s1.length].charCodeAt(0) - 97]++;
    }
    if (chars.every((num) => num === 0)) return true;
  }
  return false;
}
// @lc code=end
