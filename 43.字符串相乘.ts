/*
 * @lc app=leetcode.cn id=43 lang=typescript
 *
 * [43] 字符串相乘
 */

// @lc code=start
function multiply(num1: string, num2: string): string {
    if(num1 === "0" || num2 === "0") return "0";
    const numFn = (a: string) => a.charCodeAt(0) - "0".charCodeAt(0);

    const go = (i: number): string => {
        const n: number = numFn(num2[i]);
        if(n === 0) return "0";
        let offset = 0;
        let buf = "";
        for(let i = num1.length - 1; i >= 0; i--) {
            const res = numFn(num1[i]) * n + offset;
            buf = res % 10 + buf;
            offset = Math.floor(res / 10);
        }
        return offset > 0 ? offset + buf : buf;
    }

    const add = (a: string, b: string) => {
    
        let i = a.length - 1;
        let j = b.length - 1;
        let offset = 0;
        let res = "";
        while(a[i] || b[j]) {
            let tmp: number;
            if(i < 0) {
                tmp = numFn(b[j]) + offset;
            } else if(j < 0) {
                tmp = numFn(a[i]) + offset;
            } else {
                tmp = numFn(a[i]) + numFn(b[j]) + offset;
            }
            offset = tmp >= 10 ? 1 : 0;
            res = tmp % 10 + res; 
            i--;
            j--;
        }
        return offset > 0 ? offset + res : res;
    }

    let ans = "0";
    for(let i = num2.length - 1; i >= 0; i--) {
        const res = go(i) + Array(num2.length - 1 - i).fill(0).join("");
        if(res !== "0") {
            ans = add(ans, res);
        }
    }
    
    return ans;
};
// @lc code=end

multiply("2", "3");
