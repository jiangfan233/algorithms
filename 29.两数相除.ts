/*
 * @lc app=leetcode.cn id=29 lang=typescript
 *
 * [29] 两数相除
 */

// @lc code=start
function divide(dividend: number, divisor: number): number {
    // 是否同号
    const flag = dividend < 0 && divisor < 0 || dividend > 0 && divisor > 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    if(divisor === 1) return flag ? Math.min(2 ** 31 - 1, dividend) : Math.max(-1 * 2 ** 31, -1 * dividend);
    let res = 0;
    while(dividend >= divisor) {
        res ++;
        dividend -= divisor;
    }
    return flag ? res : res * -1;
};
// @lc code=end

