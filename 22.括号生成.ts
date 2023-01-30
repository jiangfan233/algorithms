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

  // type Item = {
  //   l: number,
  //   r: number,
  //   buffer: string,
  // }
  // let ans: string[] = [];
  // const stack: Item[] = [{ l: 0, r: 0, buffer: "" }];
  // while (stack.length) {
  //   const { l, r, buffer } = stack.pop()!;
  //   if (buffer.length === n * 2) {
  //     ans.push(buffer);
  //     continue;
  //   }
  //   if (l < n) {
  //     stack.push({
  //       l: l + 1, r, buffer: buffer + "(",
  //     })
  //   }
  //   if(r < l) {
  //     stack.push({
  //       l, r: r + 1, buffer: buffer + ")",
  //     })
  //   }
  //   console.log(stack);
  // }
  // return ans;

  /** */
  // let ans: string[] = [];
  // const go = (l: number, r: number, buffer: string) => {
  //   if (r === n) return ans.push(buffer);
  //   if (l < n) go(l + 1, r, buffer + "(");
  //   if (r < l) go(l, r + 1, buffer + ")");
  // }
  // go(0, 0, "");
  // return ans;


  /**
   * 用栈、队列模拟递归，无论哪一个都需要保存每一步执行的状态（上下文）
   */
  type Pair = {
    l: number,
    r: number,
    buffer: string
  }
  const pairs: Pair[] = [{ l: 0, r: 0, buffer: "" }];
  const ans: string[] = [];
  while (pairs.length) {
    
    /**
     * const { l, r, buffer } = pairs.shift()!;这种方式模拟先进先出队列，最后答案中的第一个一定是 “((()))”这种形式
     * const { l, r, buffer } = pairs.pop()!;这种方式模拟先进后出栈，最后答案中的第一个一定是“()()()”这种形式
     */

    const { l, r, buffer } = pairs.pop()!;
    // const { l, r, buffer } = pairs.shift()!;
    if (r === n) {
      ans.push(buffer);
      continue;
    }
    if (l < n) {
      pairs.push({ l: l + 1, r, buffer: buffer + "(" });
    }
    if (r < l) {
      pairs.push({ l, r: r + 1, buffer: buffer + ")" });
    }
  }
  return ans;
};
// @lc code=end


console.log(generateParenthesis(3))
