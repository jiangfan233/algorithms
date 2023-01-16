/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start

type Sum = [number, number];

function trap(height: number[]): number {
  // 左右指针
  // let lMax = 0;
  // let rMax = 0;
  // let l = 0;
  // let r = height.length - 1;
  // let trappedWater = 0;
  // while(l <= r) {
  //   if(height[l] < height[r]) {
  //     if(height[l] > lMax) {
  //       lMax = height[l];
  //     } else {
  //       trappedWater += lMax - height[l];
  //     }
  //     l++;
  //   } else {
  //     if(height[r] > rMax) {
  //       rMax = height[r];
  //     } else {
  //       trappedWater += rMax - height[r];
  //     }
  //     r--;
  //   }
  // }
  // return trappedWater;

  // /////////////////////////////////////////////

  // 动态规划
  // let ans = 0;
  // let leftMaxNums = Array(height.length);
  // let rightMaxNums = Array(height.length);

  // for (let i = 0; i < height.length; i++) {
  //   leftMaxNums[i] = Math.max(leftMaxNums[i - 1] || 0, height[i]);
  // }
  // for (let i = height.length - 1; i >= 0; i--) {
  //   rightMaxNums[i] = Math.max(rightMaxNums[i + 1] || 0, height[i]);
  // }
  // for (let i = 0; i < height.length; i++) {
  //   ans += Math.min(leftMaxNums[i], rightMaxNums[i]) - height[i];
  // }
  // return ans;

  // ///////////////////////////////////////

  // 使用栈

  const peek = (arr: number[]): number => arr[arr.length - 1];
  const stack: number[] = [];
  let ans = 0;
  for (let i = 0; i < height.length; i++) {
    // 当前元素比栈顶元素大
    while (stack.length > 0 && height[i] > height[peek(stack)]) {
      const idx = stack.pop();
      if (stack.length === 0) {
        break;
      }
      ans +=
        (Math.min(height[i], height[peek(stack)]) - height[idx!]) *
        (i - peek(stack) - 1);
    }
    stack.push(i);
  }
  return ans;
}
// @lc code=end

console.log(trap([4, 2, 0, 3, 2, 5]));
