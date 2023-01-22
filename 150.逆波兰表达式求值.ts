/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  const map: { [key: string]: boolean } = {
    "*": true,
    "-": true,
    "+": true,
    "/": true,
  }
  for (let str of tokens) {
    if (map[str]) {
      let b = stack.pop();
      let a = stack.pop();
      stack.push(cal(str, a!, b!));
    } else {
      stack.push(Number(str));
    }
  }
  return stack[0];
};

function cal(type: string, a: number, b: number): number {
  switch (type) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      return Math.trunc(a / b);
  }
}

// @lc code=end

console.log(evalRPN(["4", "13", "5", "/", "+"]));


