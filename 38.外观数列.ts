/*
 * @lc app=leetcode.cn id=38 lang=typescript
 *
 * [38] 外观数列
 */

// @lc code=start
function countAndSay(n: number): string {
    
    const go = (i: number, res: number[]): string => {
        if(i >= n) return res.join("");
        
        const buf = [1, res[0]];
        for(let i = 1; i < res.length; i++) {
            if(res[i] === res[i - 1]) {
                buf[buf.length - 2] ++;
            } else {
                buf.push(1, res[i]);
            }
        }
        return go(i + 1, buf);
    }

    return go(1, [1]);
    
};
// @lc code=end


console.log(countAndSay(6));
