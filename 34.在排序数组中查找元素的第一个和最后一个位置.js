/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  // let l = 0,
  //   r = nums.length - 1,
  //   mid;
  // while (l <= r) {
  //   mid = Math.floor((l + r) / 2);
  //   if (nums[mid] < target) {
  //     l = mid + 1;
  //   } else if (nums[mid] > target) {
  //     r = mid - 1;
  //   } else {
  //     return [searchLeft(nums, mid, l, target), searchRight(nums, mid, r, target)];
  //   }
  // }
  // return [-1, -1];
  // //************************************************ */

  // 如果target存在，直接返回最小的index，
  // 否则返回 大于target最小数的 最小的index
  const find = (nums, target, left = 0, right = nums.length - 1) => {
    while(left <= right) {
      const mid = (left + right) >> 1;
      // if(nums[mid] === target) {
      //   return mid;
      // } else if(nums[mid] < target) {
      //   left = mid + 1;
      // } else {
      //   right = mid - 1;
      // }
      
      // 下面代码和上面的区别在于，
      // 下面代码确保了target对应的index是最小的，上面代码则无法确保
      if(nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }

  const l = find(nums, target);
  if(nums[l] !== target) return [-1, -1];
  return [l, find(nums, target+1, l) - 1];
};

const searchLeft = (nums, index, left, target) => {
  if(nums[left] === target) return left;
  if(index === left + 1) return index;
  const mid = Math.floor((index + left) / 2);
  if(nums[mid] === target) {
    return searchLeft(nums, mid, left, target);
  } else {
    return searchLeft(nums, index, mid, target);
  }
}

const searchRight = (nums, index, right, target) => {
  if(nums[right] === target) return right;
  if(index === right - 1) return index;
  const mid = Math.floor((index + right) / 2);
  if(nums[mid] === target) {
    return searchRight(nums, mid, right, target);
  } else {
    return searchRight(nums, index, mid, target);
  }
}

// @lc code=end


console.log(searchRange([5,7,7,8,8,10], 8))