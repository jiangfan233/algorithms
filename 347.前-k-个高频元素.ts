/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  // const map = new Map<number, number>();
  // for (let num of nums) {
  //   if (map.get(num)) {
  //     map.set(num, map.get(num)! + 1);
  //   } else {
  //     map.set(num, 1);
  //   }
  // }
  // let ans: number[] = [],
  //   entries = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  // for(let i = 0; i < k; i++) {
  //   ans.push(entries[i][0]);
  // }
  // return ans;

  const map = new Map<number, number>();
  for (let num of nums) {
    if (map.get(num)) {
      map.set(num, map.get(num)! + 1);
    } else {
      map.set(num, 1);
    }
  }
  // let ans: number[] = [];
  // for(let [key, freq] of map) {
  //   if(!ans.length) {
  //     ans.push(key);
  //     continue;
  //   }
  //   if(freq > map.get(ans[ans.length - 1])!) {
  //     let j = ans.length - 2;
  //     while(freq > map.get(ans[j])! && j >= 0) {
  //       j--;
  //     }
  //     if(j < 0) {
  //       ans.unshift(key);
  //     } else {
  //       ans.splice(j + 1, 0, key);
  //     }
  //   } else {
  //     ans.push(key);
  //   }
  // }
  // return ans.slice(0, k);

  let ans: number[][] = []
  for(let [key, freq] of map) {
    if(ans[freq] === undefined) {
      ans[freq] = [key];
    } else {
      ans[freq].push(key);
    }
  }
  return ans.filter((item) => item !== undefined).flat().reverse().slice(0, k);

}
// @lc code=end


console.log(topKFrequent([1,1,1,2,2,3], 2))