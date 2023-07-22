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
        // 这种情况下 s[i] 既可以单独存在又可以和前面的数字结合
        // 所以 在当前位置的所有解法f(i) =  s[i]单独存在的所有解法alone(i) + s[i]和前面数字结合的所有解法conbine(i)
        // 既然s[i]是单独存在的，那么 s[i] 单独存在的所有解法 alone(i) === f(i-1),即s[i-1]的所有解法后面加上一个s[i], 解法数量与 s[i-1] 的解法数量f(i-1)相同
        // s[i]和前面数字结合的前提是 s[i-1]是单独的, 所以 combine(i) === alone(i-1)，根据上一步的结论，alone(i-1) === f(i-2);
        // 所以： f(i) = alone(i) + conbine(i) = f(i-1) + f(i-2)
        dp[i] = dp[i - 1] + tmp;
      } else {
        // 当s[i]无法和s[i-1]结合，s[i]只能单独存在
        dp[i] = dp[i - 1];
      }
    }

    if (s[i - 1] !== "0" && s[i] === "0") {
      // 这种情况下，s[i]即"0"只能和前面的数字结合
      if (s[i - 1] >= "3") return 0;
      dp[i] = tmp;
    }

    if (s[i - 1] === "0" && s[i] !== "0") {
      // 这种情况下，s[i]只能单独存在
      dp[i] = dp[i - 1];
    }

    if (s[i - 1] === "0" && s[i] === "0") return 0;
  }
  // console.log(dp);
  return dp[dp.length - 1];
}
// @lc code=end

console.log(numDecodings("1201234"));
