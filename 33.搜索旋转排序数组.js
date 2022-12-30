/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // if (nums.length < 3) return nums.indexOf(target);
  // // if (target < nums[0] && target > nums[nums.length - 1]) return -1;

  // const midIndex = Math.trunc(nums.length / 2),
  //   midNum = nums[midIndex];

  // // 数组未发生截断，直接用二分查找即可
  // if (midNum > nums[0] && midNum < nums[nums.length - 1])
  //   return binarySearch(nums, target, 0, nums.length - 1);

  // if (target <= midNum && target >= nums[0])
  //   return binarySearch(nums, target, 0, midIndex);
  // if (target <= nums[nums.length - 1] && target >= midNum)
  //   return binarySearch(nums, target, midIndex, nums.length - 1);

  // const l = search(nums.slice(0, midIndex), target);
  // const r = search(nums.slice(midIndex + 1), target);

  // if (l >= 0) return l;
  // if (r >= 0) return r + midIndex + 1;
  // return -1;
  // // *********************************************

  if (target < nums[0] && target > nums[nums.length - 1]) return -1;
  let l = 0,
    r = nums.length - 1, mid;
  while (l <= r) {
    mid = Math.trunc((l + r) / 2);
    if(nums[mid] === target) return mid;

    if(nums[l] <= nums[mid]) {
      if(nums[l] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if(nums[mid] < target && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};

const binarySearch = (nums, target, l, r) => {
  if (l > r) return -1;
  const midIndex = Math.trunc((l + r) / 2);
  if (nums[midIndex] === target) return midIndex;
  return nums[midIndex] > target
    ? binarySearch(nums, target, l, midIndex - 1)
    : binarySearch(nums, target, midIndex + 1, r);
};

// @lc code=end
