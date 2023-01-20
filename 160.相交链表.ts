/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  // let a = headA;
  // while(a) {
  //   let b = headB;
  //   while(b) {
  //     if(a === b) return a;
  //     b = b.next;
  //   }
  //   a = a.next;
  // }
  // return null;

  // T: O(m+n) S: O(m)
  // let mapA = new Map<ListNode, boolean>();
  // let a = headA;
  // while(a) {
  //   mapA.set(a, true);
  //   a = a.next;
  // }
  // let b = headB;
  // while(b) {
  //   if(mapA.has(b)) return b;
  //   b = b.next;
  // }
  // return null;


  // T: O(2(m + n))  S:O(4)
  // let a = headA;
  // let b = headB;
  // let countA = 0;
  // let countB = 0;
  // while (a) {
  //   countA++;
  //   a = a.next;
  // }
  // while (b) {
  //   countB++;
  //   b = b.next;
  // }
  // if (countA > countB) {
  //   a = headA;
  //   b = headB;
  // } else {
  //   a = headB;
  //   b = headA;
  // }
  // for(let i = 0; i < Math.abs(countA - countB); i++) {
  //   a = a.next;
  // }
  // while(a && b) {
  //   if(a === b) return a;
  //   a = a.next;
  //   b = b.next;
  // }
  // return null;


  /**
   * 老外的解法：
   * 题目条件：1 <= Node.val <= 105
   * 既然有内存地址相同的节点，
   * 那么修改了A的Node.val也相当于修改了B的Node.val
   */
  let a = headA;
  let b = headB;
  let ans = null;
  while(a) {
    a.val *= -1;
    a = a.next;
  }
  while(b) {
    if(b.val < 0) {
      ans = b;
      break;
    }
    b = b.next;
  }
  a = headA;
  while(a) {
    a.val *= -1;
    a = a.next;
  }
  return ans;
}
// @lc code=end
