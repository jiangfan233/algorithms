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
  // nums.sort((a, b) => a - b);
  // if (nums[0] > 0 || nums[nums.length - 1] < 0 || nums.length < 3) return [];
  // if (!nums[0] && !nums[1] && !nums[2]) return [[0, 0, 0]];

  // let ans = [], i = 0, ii = i;
  // while(i < nums.length - 2 && nums[i] <= 0) {
  //   let k = nums.length - 1, kk = k;
  //   while(i < k - 1) {
  //     let j = i + 1;

  //     while(k > j && nums[i] + nums[j] + nums[k] > 0) {
  //       k--;
  //     }
  //     while(k > j && nums[i] + nums[j] + nums[k] < 0) {
  //       j++;
  //     }

  //     if(k > j && nums[i] + nums[j] + nums[k] === 0) {
  //       ans.push([nums[i], nums[j], nums[k]]);
  //       j++;
  //       ii = i;
  //       kk = k;
  //       k--;
  //       while(nums[kk] === nums[k]) k--;
  //     }

  //     if(k > j && nums[i] + nums[j] + nums[k] > 0) {
  //       k--;
  //       continue;
  //     }

  //     if(k <= j) {
  //       break;
  //     }
  //   }

  //   i++;
  //   while(nums[ii] === nums[i]) i++;
  // }
  // return ans;
  // 解法三 end

  // 解法四 start
  let len = nums.length;
  if(len < 3) return [];
  nums.sort((a, b) => a - b);
  if (nums[0] > 0 || nums[len - 1] < 0) return [];
  // if (!nums[0] && !nums[1] && !nums[2]) return [[0, 0, 0]];
  let ans = [],
    i = 0;

  while (nums[i] <= 0 && i < len - 2) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      i++;
      continue;
    }
    let j = i + 1,
      k = len - 1,
      sum = 0;
    while (k > j) {
      sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        k--;
        while (nums[k] === nums[k + 1]) k--;
        j++;
        while (nums[j] === nums[j - 1]) j++;
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
      // while (nums[i] + nums[j] + nums[k] > 0) {
      //   k--;
      //   while (nums[k] === nums[k + 1]) k--;
      // }
      // while (nums[i] + nums[j] + nums[k] < 0) {
      //   j++;
      //   while (nums[j] === nums[j - 1]) j++;
      // }
    }

    i++;
  }

  return ans;

  // 解法四 end
};
// @lc code=end

console.log(threeSum([-4, -1, -1, 0, 1, 2]));
