/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

  if(!list1 || !list2) return list2 || list1;

  if(list1.val <= list2.val) {
    small = list1;
    big = list2;
  } else {
    small = list2;
    big = list1;
  }
  const res = small;

  while(small.next && small.next.val <= big.val) {
    small = small.next;
  }
  const rest1 = small.next;
  small.next = big;

  mergeTwoLists(big, rest1);
  return res;

  // if(!list1) {
  //   return list2;
  // }

  // if(!list2) {
  //   return list1;
  // }

  // if(list1.val <= list2.val) {
  //   list1.next = mergeTwoLists(list2, list1.next);
  //   return list1;
  // } else {
  //   list2.next = mergeTwoLists(list1, list2.next);
  //   return list2;
  // }

};
// @lc code=end

