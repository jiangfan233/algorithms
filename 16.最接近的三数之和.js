/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  // 优化1： 使用distance记录最接近target的结果，并与每次的运算结果sum作比较更新distance
  // 优化2： 每次的运算结果sum === target，直接返回
  // 更新mid和right指针时，去重，新指针应与旧指针值不想同。
  let distance = Number.MAX_SAFE_INTEGER,
    l = 0,
    mid,
    r = nums.length - 1,
    prevMid = mid,
    prevR = r;
  while (l < r - 1) {
    mid = l + 1;
    r = nums.length - 1;
    while (mid < r) {
      prevMid = mid;
      prevR = r;
      const sum = nums[l] + nums[mid] + nums[r];
      if (Math.abs(distance - target) > Math.abs(sum - target)) {
        distance = sum;
      }
      if (sum > target) {
        r--;
        while (nums[r] === nums[prevR]) r--;
      } else if (sum < target) {
        mid++;
        while (nums[mid] === nums[prevMid]) mid++;
      } else {
        return sum;
      }
    }
    l++;
  }
  return distance;
  // *************************************************

  // O(n**3)
  // let distance = Number.MAX_SAFE_INTEGER,
  //   ans = nums[0] + nums[1] + nums[2];
  // for (let i = 0; i < nums.length; i++) {
  //   for (let mid = i + 1; mid < nums.length; mid++) {
  //     for (let j = mid + 1; j < nums.length; j++) {
  //       const sum = nums[i] + nums[mid] + nums[j],
  //         tmp = Math.abs(sum - target);
  //       if (tmp < distance) {
  //         distance = tmp;
  //         ans = sum;
  //       }

  //     }
  //   }
  // }
  // return ans;
  // ******************************************
};

// @lc code=end

console.log(threeSumClosest([1, 1, 1, 0], 100));
