/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
 */

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  let tmp = head;
  let nodes: ListNode[] = [];
  while (tmp) {
    const node = tmp;
    nodes.push(tmp);
    tmp = tmp.next;
    node.next = null;
  }

  for (let i = 0, prev: null | ListNode = null; i < nodes.length; i++) {
    if (i > nodes.length - i - 1) break;
    let a = nodes[i];
    let b = nodes[nodes.length - i - 1];
    if (a !== b) {
      a.next = b;
    }
    if (prev) {
      prev.next = a;
    }
    prev = b;
  }

}


// @lc code=end
const head = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
reorderList(head);
console.log(head.next!.next);
