/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  // let ans: string[] = [];
  // const go = (buffer: string, l: number, r: number): void => {
  //   if (l >= n && r >= n) {
  //     ans.push(buffer);
  //     return;
  //   }
  //   if (l < n) {
  //     go(buffer + "(", l + 1, r);
  //   }
  //   if (r < l) {
  //     go(buffer + ")", l, r + 1);
  //   }
  // }
  // go("", 0, 0);
  // return ans;

  type Item = {
    l: number,
    r: number,
    buffer: string,
  }
  let ans: string[] = [];
  const stack: Item[] = [{ l: 0, r: 0, buffer: "" }];
  while (stack.length) {
    const { l, r, buffer } = stack.pop()!;
    if (buffer.length === n * 2) {
      ans.push(buffer);
      continue;
    }
    if (l < n) {
      stack.push({
        l: l + 1, r, buffer: buffer + "(",
      })
    }
    if(r < l) {
      stack.push({
        l, r: r + 1, buffer: buffer + ")",
      })
    }
    console.log(stack);
  }
  return ans;
};
// @lc code=end


console.log(generateParenthesis(3))
