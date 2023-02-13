/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let a = list1;
  let b = list2;
  let tmp = new ListNode(0), ans = tmp;
  while(a && b) {
    if(a.val <= b.val) {
      tmp.next = a;
      a = a.next;
    } else {
      tmp.next = b;
      b = b.next;
    }
    tmp = tmp.next;
  }
  if(!a) tmp.next = b;
  if(!b) tmp.next = a;
  return ans.next;
};
// @lc code=end

