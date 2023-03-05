/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {

    // 解法一
    // return haystack.indexOf(needle);

    // 解法二
    // let i = 0;
    // const len = haystack.length - needle.length;

    // type Res = { result: boolean, idx: number | undefined };

    // const check = (i: number, j: number, idx: number | undefined): Res => {
    //     if(j >= needle.length) return { result: true, idx };
    //     if(i >= haystack.length || haystack[i] !== needle[j]) return { result: false, idx };
    //     if(idx === undefined && needle[0] === haystack[i]) idx = i;
    //     return check(i + 1, j + 1, idx);
    // }

    // while(i <= len) {
    //     if(haystack[i] === needle[0]) {
    //         const { result, idx } = check(i+1, 1, undefined);
    //         if(result) return i;
    //         if(idx !== undefined && idx > i) {
    //             i = idx;
    //             continue;
    //         }
    //     }
    //     i++;
    // }
    // return -1;


    // 解法三
    // 滑动窗口
    let l = 0;
    const len = haystack.length - needle.length;
    while(l <= len) {
        if(haystack.substring(l, l + needle.length) === needle) return l;
        l++;
    }
    return -1;
};


// @lc code=end

