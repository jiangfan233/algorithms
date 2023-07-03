/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
    let rightSum = nums.reduce((acc, curr) => acc + curr);
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        // consider edge cases!!!!
        if(i >= 1) leftSum += nums[i-1];
        if(rightSum === leftSum) return i;
    }
    return -1;
};
// @lc code=end


console.log(pivotIndex([1,2,-1]));