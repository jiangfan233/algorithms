/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1 比特与 2 比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  // if(bits.length === 1) return bits[0] ===0;
  // if(bits[bits.length - 1] === 1) return false;
  
  let i = 0;
  while(i < bits.length-1) {
    if(bits[i]) i += 2;
    else i++;
  }
  return i === bits.length-1;
};

// @lc code=end

console.log(isOneBitCharacter([0,1, 0]))