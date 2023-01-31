/*
 * @lc app=leetcode.cn id=853 lang=typescript
 *
 * [853] 车队
 */

// @lc code=start
function carFleet(target: number, position: number[], speed: number[]): number {

  // 按照距离target由近到远排序（position从大到小排序）
  const pairs = position.map((pos, i) => [pos, speed[i]]).sort((a, b) => b[0] - a[0]);
  const stack :number[] = [];

  // 对于每一辆车，如果他到达的时间大于上一辆车，入栈
  for(let i = 0; i < pairs.length; i++) {
    const t = (target - pairs[i][0]) / pairs[i][1];
    if(stack.length === 0 || t > stack[stack.length - 1]) {
      stack.push(t);
    }
  }
  return stack.length;
};
// @lc code=end

console.log(carFleet(13,
  [10, 2, 5,  7, 4, 6, 11],
  [7,  5, 10, 5, 9, 4, 1]
))
