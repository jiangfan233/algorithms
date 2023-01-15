/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  // const result: number[] = Array(nums.length).fill(1);
  // const len = nums.length;
  // const curr: number[] = Array(2).fill(1);

  // for (let i: number = 1; i < len; i++) {
  //   curr[0] *= nums[i - 1];
  //   curr[1] *= nums[len - i];
  //   result[i] *= curr[0];
  //   result[len - i - 1] *= curr[1];
  // }
  // return result;



  // const preFix: number[] = Array(nums.length).fill(1);
  // const postFix: number[] = Array(nums.length).fill(1);
  // // nums[i] 前面数的积
  // for (let i = 1; i < nums.length; i++) {
  //   preFix[i] = preFix[i - 1] * nums[i - 1];
  // }

  // // nums[i] 后面数的积
  // for (let i = nums.length - 2; i >= 0; i--) {
  //   postFix[i] = postFix[i + 1] * nums[i + 1];
  // }
  // let ans: number[] = Array(nums.length);
  // for (let i = 0; i < nums.length; i++) {
  //   ans[i] = preFix[i] * postFix[i];
  // }
  // return ans;


  // const preFix: number[] = Array(nums.length).fill(1);
  // const postFix: number[] = Array(nums.length).fill(1);
  // // nums[i] 前面数的积
  // for (let i = 1; i < nums.length; i++) {
  //   preFix[i] = preFix[i - 1] * nums[i - 1];
  // }
  // // nums[i] 后面数的积
  // for (let i = nums.length - 2; i >= 0; i--) {
  //   postFix[i] = postFix[i + 1] * nums[i + 1];
  //   preFix[i] *= postFix[i];
  // }
  // return preFix;


  let len = nums.length, ans: number[] = Array(len).fill(1);
  let pre = 1, post = 1;
  for(let i = 1; i < len; i++) {
    pre *= nums[i - 1];
    post *= nums[len - i];
    ans[i] *= pre;
    ans[len - i - 1] *= post;
  } 
  return ans;
}
// @lc code=end
