/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  // let i = 0, map = {};
  // return strs.reduce((ans, str) => {
  //   const s = str.split("").sort().join("");
  //   // console.log(ans, map)
  //   if(map[s] !== undefined) {
  //     ans[map[s]].push(str);
  //   } else {
  //     map[s] = i;
  //     ans.push([str]);
  //     i++;
  //   }
  //   return ans;
  // }, [])

  let map = strs.reduce((map, str) => {
    // 优化
    // const s = str.split("").sort().join("");
    const s = Array.from(str).sort().toString();
    if(map[s]) {
      map[s].push(str);
    } else {
      map[s] = [str];
    }
    return map;
  }, {})
  return Object.values(map);
};
// @lc code=end

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
