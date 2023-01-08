/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // if (!head) return false;
  // let map = new Map(),
  //   l = head;
  // while (l) {
  //   if (map.has(l)) {
  //     return true;
  //   } else {
  //     map.set(l, true);
  //     l = l.next;
  //   }
  // }
  // return false;

  // let s1 = head,
  //   s2 = head;
  // while (s1 && s2) {
  //   s1 = s1.next;
  //   if (s2.next) {
  //     s2 = s2.next.next;
  //   } else {
  //     return false;
  //   }
  //   if (s1 === s2) return true;
  // }
  // return false;

  /**
   * 因为fast 速度比较快，所以while循环只需要保证fast存在即可
   */
  let fast = head;
  while(fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if(head === fast) return true;
  }
  return false;
};
// @lc code=end
