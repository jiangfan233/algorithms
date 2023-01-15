/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  const map = new Map<number, boolean>();
  for (let num of nums) {
    map.set(num, true);
  }
  let ans = 0;
  for (let num of nums) {
    if (!map.get(num)) continue;

    let i = num + 1,
      j = num - 1,
      count = 1;
    
    // 遍历比num大的
    while (map.get(i)) {
      map.set(i, false);
      count++;
      i++;
    }

    // 遍历比num小的
    while (map.get(j)) {
      map.set(j, false);
      count++;
      j--;
    }
    ans = Math.max(ans, count);
  }
  return ans;

  // const set = new Set(nums);
  // let ans = 0;
  // for(let num of nums){
  //   if(!set.has(num - 1)) {
  //     let count = 1;
  //     let n = num + 1;
  //     while(set.has(n)) {
  //       n++;
  //       count++;
  //     }
  //     ans = Math.max(ans, count);
  //   }
  // }
  // return ans;
}
// @lc code=end

console.log(longestConsecutive([0, 3, 7, 2, 5, 4, 6, 0, 1]));
