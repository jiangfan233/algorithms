/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let count = 0;
  let slow = head;
  let curr = head;
  while(curr) {
    // count===n时，slow刚好指向要被删除的节点
    // 需要让slow指向要被删除的节点的前一个节点
    if(count > n) {
      slow = slow.next;
    }
    curr = curr.next;
    count++;
  }

  // 如果count === n，说明要删除首节点；
  if(count === n) return head.next;
  slow.next = slow.next.next;
  return head;
};
// @lc code=end

