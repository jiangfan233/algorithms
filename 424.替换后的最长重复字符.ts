/*
 * @lc app=leetcode.cn id=424 lang=typescript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {
  let ans = 0;
  let l = 0;
  let r = 0;
  let maxNumOfChar = 0;
  const map: {[key: string]: number } = {};

  while(r < s.length) {
    const c = s[r]
    if(map[c] === undefined) {
      map[c] = 0;
    } 
    map[c] += 1;

    // 当前已遍历的元素个数
    const currLen = r - l + 1;
    maxNumOfChar = Math.max(maxNumOfChar, map[c]);
    if(currLen - maxNumOfChar <= k) {
      // 需要替换的元素个数小于等于k，更新ans
      ans = Math.max(ans, currLen);
    } else {
      // 窗口左边界发生变化，与窗口相关的数据应该更新
      map[s[l]] -= 1;
      l++;
    }
    r++;
  }
  return ans;
}
// @lc code=end

console.log(characterReplacement("AABABBA", 1));
