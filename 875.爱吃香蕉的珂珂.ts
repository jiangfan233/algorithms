/*
 * @lc app=leetcode.cn id=875 lang=typescript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
function minEatingSpeed(piles: number[], h: number): number {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (let pile of piles) {
    if (pile < min) min = pile;
    if (pile > max) max = pile;
    sum += pile;
  }
  min = Math.min(min, Math.ceil(sum / h));
  let ans = max;
  
  const eatHours = (num: number) => piles.reduce((hours, pile) => hours += Math.ceil(pile / num), 0);

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    if(eatHours(mid) <= h) {
      max = mid - 1;
      ans = Math.min(ans, mid);
    } else {
      min = mid + 1;
    }
  }

  return ans;
};
// @lc code=end

console.log(minEatingSpeed([3,6,7,11], 8))