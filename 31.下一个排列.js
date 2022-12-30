/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const firstDesNumIndex = findFirstDescNumIndex(nums);
  if (firstDesNumIndex < 0) return nums.reverse();

  const nextLargeIndex = findNextLargeIndex(nums, nums[firstDesNumIndex]);
  swap(nums, firstDesNumIndex, nextLargeIndex);

  let l = firstDesNumIndex + 1,
    r = nums.length - 1;
  while (l < r) {
    swap(nums, l, r);
    l++;
    r--;
  }

  return nums;
};

const findFirstDescNumIndex = (nums) => {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
      return i - 1;
    }
  }
  return -1;
};

const findNextLargeIndex = (nums, firstDescNum) => {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > firstDescNum) {
      return i;
    }
  }
};

const swap = (nums, i, j) => {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};

// @lc code=end

console.log(nextPermutation([1, 3, 2]));
