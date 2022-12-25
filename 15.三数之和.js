/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 解法一 start
  // const map = {};

  // nums.sort((a, b) => a - b);
  // if (nums[0] > 0 || nums[nums.length - 1] < 0) return [];
  // if (!nums[0] && !nums[1] && !nums[2]) return [[0, 0, 0]];

  // for (let i = 0; i < nums.length; i++) {
  //   if (map[nums[i]]) {
  //     map[nums[i]] += 1;
  //   } else {
  //     map[nums[i]] = 1;
  //   }
  // }

  // nums = Array.from(new Set(nums));
  // let left = 0,
  //   right = nums.length - 1,
  //   ans = [];

  // if(map[0] >= 3) ans.push([0,0,0]);

  // while (nums[left] < 0) {
  //   while (nums[right] > 0) {
  //     const c = -1 * (nums[left] + nums[right]);
  //     if ((-1 * nums[left] > nums[right] ? nums[right] : nums[left]) === c) {
  //       if (map[c] >= 2) {
  //         ans.push([nums[left], c, nums[right]]);
  //         // ll = left;
  //       }
  //     } else if(map[c] && c > nums[left] && c < nums[right]) {
  //       ans.push([nums[left], c, nums[right]]);
  //       // ll = left;
  //     }
  //     right--;
  //   }

  //   right = nums.length - 1;
  //   left++;
  //   // while(nums[ll] === nums[left]) left++;
  // }

  // return ans;
  // 解法一 end

  // 解法二 start 更耗时了
  // nums = nums.sort((a, b) => a - b);
  // if (nums[0] > 0 || nums[nums.length - 1] < 0 || nums.length < 3) return [];
  // if (!nums[0] && !nums[1] && !nums[2]) return [[0, 0, 0]];

  // // nums = Array.from(new Set(nums));
  // let l = 0,
  //   r = nums.length - 1,
  //   ans = [], ll=l, rr=r;

  // while (l < r && nums[l] <= 0) {
  //   while (l < r && nums[r] >= 0) {
  //     const c = -1 * (nums[l] + nums[r]);
  //     if (nums.slice(l + 1, r).includes(c)) {
  //       ans.push([nums[l], c, nums[r]]);
  //       ll = l;
  //       rr = r;
  //     }
  //     r--;
  //     while(nums[rr] === nums[r]) r--;
  //   }

  //   r = nums.length - 1;
  //   rr = r;
  //   l++;
  //   while(nums[ll] === nums[l]) l++;
  // }
  // return ans;
  // 解法二 end

  // // 解法三 start
  nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums[nums.length - 1] < 0 || nums.length < 3) return [];
  if (!nums[0] && !nums[1] && !nums[2]) return [[0, 0, 0]];
  let ans = [],
    ii,
    kk,
    jj;

  for (let i = 0; i < nums.length - 2 && nums[i] <= 0; i++) {
    if (nums[ii] === nums[i]) continue;
    let j = i + 1,
      k = nums.length - 1;

    if (nums[i] + nums[j] + nums[k] === 0) {
      ans.push([nums[i], nums[j], nums[k]]);
      ii = i;
      jj = j;
      kk = k;
    }

    while (nums[i] + nums[j] + nums[k] > 0 && nums[k] >= 0 && k > j) {
      k--;
      if (k > j && nums[i] + nums[j] + nums[k] === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        kk = k;
        ii = i;
      }
    }

    while (nums[i] + nums[j] + nums[k] < 0 && nums[j] <= 0 && k > j) {
      j++;
      if (k > j && nums[i] + nums[j] + nums[k] === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        jj = j;
        ii = i;
      }
    }
  }
  return ans;
};
// @lc code=end

console.log(threeSum([-4, -1, -1, 0, 1, 2]));
