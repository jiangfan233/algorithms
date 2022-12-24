/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  // let flag = 0, ans = {};
  // let p = ans, sum = 0;

  // while(l1 || l2 || sum) {
    
  //   if(l1) {
  //     sum += l1.val;
  //     l1 = l1.next;
  //   } 
  //   if(l2) {
  //     sum += l2.val;
  //     l2 = l2.next;
  //   }
  //   if(sum >= 10) {
  //     sum -= 10;
  //     flag = 1;
  //   } 

  //   p.next = new ListNode(sum);
  //   p = p.next;
  //   sum = flag;
  //   flag = 0;
  // }
  
  // return ans.next;

  // 递归
  return helper(l1, l2, 0);
};


function helper(l1, l2, flag, ans = new ListNode()) {
  if(l1 || l2 || flag) {
    let sum = flag;
    if(l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if(l2) {
      sum += l2.val;
      l2 = l2.next;
    } 
    
    ans.val = sum % 10;
    ans.next = helper(l1, l2, ~~(sum / 10));
    return ans;
  }
  return null;
}


// @lc code=end

