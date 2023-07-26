/*
 * @lc app=leetcode.cn id=97 lang=typescript
 *
 * [97] 交错字符串
 */

// @lc code=start
function isInterleave(s1: string, s2: string, s3: string): boolean {
    if(s3 === s2 && s3 === s1) return s3.length === 0; 
    if(s3.length !== s1.length + s2.length) return false;
    if(s2 === "") return s3 === s1;
    if(s1 === "") return s3 === s2;

    let i = 0;
    let j = 0;
    let k = 0;
    while(i < s3.length) {
        if(s3[i] === s1[j] && s3[i] === s2[k]) {
            let jj = j + 1;
            let kk = k + 1;
            
            let ii1 = i + 1;
            while(s3[ii1] === s1[jj]) {
                ii1++;
                jj++;
            }

            let ii2 = i + 1;
            while(s3[ii2] === s2[kk]) {
                ii2++;
                kk++;
            }
            if(ii1 > ii2) {
                i = ii1;
                j = jj;
            } else if(ii1 < ii2) {
                i = ii2;
                k = kk;
            } else {
                return false;
            }


        } else if(s3[i] === s1[j]) {
            j++;
            i++;
        } else if(s3[i] === s2[k]) {
            k++;
            i++;
        } else {
            return false;
        }

        
    }

    return true;
};
// @lc code=end

console.log(isInterleave("aabc", "abad", "aabacbad"))

