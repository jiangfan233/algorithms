/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  // if(!duration) return 0;
  // let l = 0, r = 1, end = timeSeries[l] + duration - 1, ans=0;
  // while(r < timeSeries.length) {

  //   if(end >= timeSeries[r]) {
  //     end = timeSeries[r] + duration - 1;
  //   } else {
  //     ans += end - timeSeries[l] + 1;
  //     l = r;
  //     end = timeSeries[l] + duration - 1;
  //   }
  //   r++;
  // }

  // return ans + end - timeSeries[l] + 1;

  // let l = 0, r = 0, ans = 0, tmp;
  // while(r < timeSeries.length) {
  //   tmp = timeSeries[r] + duration - 1;
  //   // if(tmp < (timeSeries[r+1] || Infinity)) {
  //   if(tmp < timeSeries[r+1]) {
  //     ans += tmp - timeSeries[l] + 1;
  //     l = r + 1;
  //   }
  //   r++;
  // }
  // // return ans;
  // return ans + tmp - timeSeries[l] + 1;

  let ans = duration;
  for (let i = 1; i < timeSeries.length; i++) {
    ans += Math.min(duration, timeSeries[i] - timeSeries[i - 1]);
  }
  return ans;
};

// @lc code=end

console.log(findPoisonedDuration([1, 2, 3, 9], 3));
