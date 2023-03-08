/*
 * @lc app=leetcode.cn id=168 lang=typescript
 *
 * [168] Excel表列名称
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
    let res = "";
    // while(columnNumber > 0) {
    //     let r = columnNumber % 26;
    //     if(r === 0) r = 26;
    //     res = String.fromCharCode(64 + r) + res;
    //     columnNumber = (columnNumber - r) / 26;
    // }

    let r = 0;
    while(columnNumber > 0) {
        r = (columnNumber - 1) % 26;
        res = String.fromCharCode(65 + r) + res;
        columnNumber = Math.floor((columnNumber - r) / 26);
    }

    return res;
};
// @lc code=end


console.log(convertToTitle(701),)