/*
 * @lc app=leetcode.cn id=739 lang=typescript
 *
 * [739] 每日温度
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  // T: O(n**2)
  // return temperatures.reduce((ans: number[], curr, i) => {
  //   if(i === temperatures.length - 1) {
  //     ans.push(0);
  //   } else {
  //     let j = i + 1;
  //     while(temperatures[j] <= curr && j < temperatures.length) {
  //       j++;
  //     }
  //     ans.push(temperatures[j] > curr ? j - i : 0);
  //   }
  //   return ans;
  // }, [])

 
  const ans = Array(temperatures.length).fill(0);
  let stack: number[] = [0];
  for (let i = 1; i < temperatures.length; i++) {
    const curr = temperatures[i];

    while (stack.length && curr > temperatures[stack[stack.length - 1]]) {
      const idx = stack.pop()!;
      ans[idx] = i - idx;
    }

    stack.push(i);
  }
  return ans;
};
// @lc code=end

