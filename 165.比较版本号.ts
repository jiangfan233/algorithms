/*
 * @lc app=leetcode.cn id=165 lang=typescript
 *
 * [165] 比较版本号
 */

// @lc code=start
function cmp(a: string, b: string): number {
  if (a.length === b.length) {
    return a === b ? 0 : a > b ? 1 : -1;
  } else if (a.length > b.length) {
    let tmp = b.padStart(a.length, "0");
    return cmp(a, tmp);
  } else {
    let tmp = a.padStart(b.length, "0");
    return cmp(tmp, b);
  }
  // return 0;
}

function compareVersion(version1: string, version2: string): number {
  let arr1 = version1.split(".").map(Number);
  let arr2 = version2.split(".").map(Number);
  let len = Math.max(arr1.length, arr2.length);

  for(let i = 0; i < len; i++) {
      // console.log(arr1[i], arr2[i], arr1[i] > arr2[i])
      if(arr1[i] === undefined) arr1[i] = 0;
      if(arr2[i] === undefined) arr2[i] = 0;

      if(arr1[i] > arr2[i]) {
          return 1;
      } else if(arr1[i] === arr2[i]) {
          continue;
      } else {
          return -1;
      }
  }
  return 0;


  // solution2  
  // let arr1 = version1.split(".");
  // let arr2 = version2.split(".");
  // let len = Math.max(arr1.length, arr2.length);
  // let ans = 0;
  // Array(len)
  //   .fill(0)
  //   .forEach((_, ind) => {
  //     if(ans !== 0) return;
  //     if (arr1[ind] === undefined) arr1[ind] = "";
  //     if (arr2[ind] === undefined) arr2[ind] = "";
  //     let res = cmp(arr1[ind], arr2[ind]);
  //     if (res !== 0) ans = res;
  //   });
  // return ans;

 


}
// @lc code=end

console.log(compareVersion("3.0.4.012", "3.0.4.2"));
