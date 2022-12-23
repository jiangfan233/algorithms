/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // const nums1Cp = nums1.slice(0, m);

  // let i = 0, j = 0, k = 0;
  // while(k < n + m) {

  //   if(i === m) {
  //     while(j < n) {
  //       nums1[k++] = nums2[j++] 
  //     }
  //     return nums1;
  //   }

  //   if(j === n) {
  //     while(i < m) {
  //       nums1[k++] = nums1Cp[i++];
  //     }
  //     return nums1;
  //   }

  //   if(nums1Cp[i] < nums2[j]) {
  //     nums1[k] = nums1Cp[i++];
  //   } else {
  //     nums1[k] = nums2[j++];
  //   }

  //   k++;
  // }

  let k = m + n - 1;
  m--;
  n--;
  while(n >= 0) {
    nums1[k--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
  return nums1;
};
// @lc code=end

