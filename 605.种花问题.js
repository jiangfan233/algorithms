/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  // for (let l = -1, r = 0; r < flowerbed.length; r++) {
  //   // if (!flowerbed[r] && !flowerbed[r + 1] && (l < 0 || flowerbed[l] === 0)) {
  //   //   flowerbed[r] = 1;
  //   //   n--;
  //   //   l = r;
  //   // } else {
  //   //   l++;
  //   // }
  //   if(flowerbed[r] || flowerbed[r+1] || flowerbed[l]) {
  //     l++;
  //   } else {
  //     flowerbed[r] = 1;
  //     n--;
  //     l = r;
  //   }
  // }
  // return n <= 0;

  // 修改了原数组
  // if(flowerbed.length === 1) return n > 0 ? flowerbed[0] === 0 : true;
  // for(let i=0; i<flowerbed.length; i++) {
  //   if(flowerbed[i-1] || flowerbed[i] || flowerbed[i+1]) {
  //     n = n;
  //   } else {
  //     flowerbed[i] = 1;
  //     n--;
  //   }
  // }
  // return n <= 0;

  let curr = 0;
  for(let i = 0; i<= flowerbed.length; i++) {
    if(i < flowerbed.length && flowerbed[i] === 0) {
      curr++;
      if(i === 0) curr++;
      if(i === flowerbed.length -1) curr++;
    } else {
      n -= Math.trunc((curr-1) / 2);
      curr = 0;
      if(n <= 0) return true;
    }
  }
  return false;
};
// @lc code=end

console.log(canPlaceFlowers([0,0,0,0], 2));
