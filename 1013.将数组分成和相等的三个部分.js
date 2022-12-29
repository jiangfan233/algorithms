/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  // let sum = arr.reduce((s, curr) => s + curr, 0);
  // if (sum % 3 !== 0) return false;
  // sum /= 3;

  // let l = 1,
  //   r = arr.length - 2,
  //   ls = arr[0],
  //   rs = arr[arr.length - 1];
  
  //   while(ls !== sum && l < arr.length || rs !== sum && r >= 0) {
  //     if(ls !== sum) ls += arr[l++];
  //     if(rs !== sum) rs += arr[r--];
  //   }
  // // console.log(sum, l, r);
  // return l <= r && ls === sum && rs === sum;

  let sum = arr.reduce((s, curr) => s + curr, 0), avg = sum / 3;
  if (avg !== Math.trunc(avg)) return false;
  let tmp = 0, count = 0;
  for(let num of arr) {
    tmp += num;
    if(tmp === avg) {
      tmp = 0;
      count++;
    }
  }
  return count >= 3;
};
// @lc code=end

console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]));
