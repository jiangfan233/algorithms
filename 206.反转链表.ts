/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {

  // const go = (prev: ListNode | null, curr: ListNode | null) => {
  //   if(!curr) return prev;
  //   const tmp = curr.next;
  //   curr.next = prev;
  //   return go(curr, tmp);
  // }
  // return go(null, head);

  // let prev = null;
  // let curr = head;
  // while(curr) {
  //   const tmp = curr.next;
  //   curr.next = prev;
  //   if(!tmp) return curr; 
  //   prev = curr;
  //   curr = tmp;
  // }
  // return curr;

  let prev = null;
  while(head) {
    const tmp = head.next;
    head.next = prev;
    prev = head;
    head = tmp;
  }
  return prev;
};
// @lc code=end

