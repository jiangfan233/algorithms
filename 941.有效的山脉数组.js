/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  // if (arr.length < 3) return false;
  // let maxIndex = 0;
  // for (let i = 1; i < arr.length; i++) {
  //   maxIndex = arr[i] > arr[maxIndex] ? i : maxIndex;
  // }
  // return (
  //   maxIndex !== 0 &&
  //   maxIndex !== arr.length - 1 &&
  //   arr.slice(0, maxIndex).every((item, i) => item < arr[i + 1]) &&
  //   arr.slice(maxIndex + 1).every((item, i) => item < arr[maxIndex + i])
  // );

  // ***************************************

  // let flag = true, i = 0, maxIndex = 0;
  // while(i < arr.length - 1) {
  //   if(arr[i] === arr[i+1]) return false;
  //   if(flag) {
  //     if(arr[i+1] > arr[i]) {
  //       maxIndex = i + 1;
  //       i++;
  //     } else {
  //       flag = false;
  //     }
  //   } else {
  //     if(arr[i] > arr[i+1]) {
  //       i++;
  //     } else {
  //       return false;
  //     }
  //   }
  // }
  // return maxIndex !== 0 && maxIndex !== arr.length - 1;

  // ***************************************

  let left = 0, right = arr.length - 1;
  while(arr[left] < arr[left + 1] || arr[right-1] > arr[right]) {
    if(arr[left] < arr[left + 1]) {
      left++;
    }
    if(arr[right-1] > arr[right]) {
      right--;
    }
  }
  if(left !== right || left === arr.length-1 || right === 0) {
    return false;
  }
  return true;
};
// @lc code=end
