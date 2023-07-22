/*
 * @lc app=leetcode.cn id=91 lang=typescript
 *
 * [91] 解码方法
 */

// @lc code=start

function numDecodings(s: string): number {
  if (s[0] === "0") return 0;
  let dp = Array(s.length).fill(0);
  dp[0] = 1;

  const check = (i: number) =>
    s[i - 1] === "1" || (s[i - 1] === "2" && s[i] <= "6");

  for (let i = 1; i < s.length; i++) {
    let tmp = i - 2 < 0 ? 1 : dp[i - 2];

    if (s[i - 1] !== "0" && s[i] !== "0") {
      if (check(i)) {
        dp[i] = dp[i - 1] + tmp;
      } else if (check(i - 1)) {
        dp[i] = dp[i - 1];
      } else {
        dp[i] = tmp;
      }
    }

    if (s[i - 1] !== "0" && s[i] === "0") {
      if (s[i - 1] >= "3") return 0;
      dp[i] = tmp;
    }

    if (s[i - 1] === "0" && s[i] !== "0") {
      // if (dp[i - 1] === 0) return 0;
      dp[i] = dp[i - 1];
    }

    if (s[i - 1] === "0" && s[i] === "0") return 0;
  }
  // console.log(dp);
  return dp[dp.length - 1];
}
// @lc code=end

console.log(numDecodings("1201234"));
