/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let a = l1;
  let b = l2;
  let res = new ListNode();
  let head = res;
  let acc = 0;
  let sum = 0;
  while (a || b) {
    if (!a) {
      sum = acc + b.val;
      b = b.next;
    } else if (!b) {
      sum = acc + a.val;
      a = a.next;
    } else {
      sum = a.val + acc + b.val;
      a = a.next;
      b = b.next;
    }

    head.val = sum % 10;
    acc = Math.trunc(sum / 10);
    if (!a && !b) break;
    head.next = new ListNode();
    head = head.next;
  }
  if(acc) head.next = new ListNode(acc);
  return res;
}
// @lc code=end
