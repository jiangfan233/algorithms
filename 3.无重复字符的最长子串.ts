/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  /**
   * 窗口法
   * 用l表示窗口左边界，用map表示窗口，
   * 如果当前元素的索引落在窗口内部（map.get(char)! >= l），则需要更新左边界
   */
  let l = 0;
  let ans = 0;
  const map = new Map<string, number>();
  for (let r = 0; r < s.length; r++) {
    const char = s.charAt(r);
    if (map.get(char)! >= l) {
      l = map.get(char)! + 1;
    } else {
      ans = Math.max(r - l + 1, ans);
    }
    map.set(char, r);
  }
  return ans;
}
// @lc code=end

console.log(lengthOfLongestSubstring("tmmzuxt"))