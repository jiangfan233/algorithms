/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // let i = 0,
  //   removed = head,
  //   prev = head,
  //   curr = head;
  // while (i < n) {
  //   curr = curr.next;
  //   i++;
  // }

  // while (curr) {
  //   prev = removed;
  //   curr = curr.next;
  //   removed = removed.next;
  // }
  // prev.next = removed.next;
  // return removed === head ? head.next : head;

  // let i = 0,
  //   removed = head,
  //   prev = head,
  //   curr = head;

  // while (curr) {
  //   if(i < n) {
  //     i++;
  //   } else {
  //     prev = removed;
  //     removed = removed.next;
  //   }
  //   curr = curr.next;
  // }
  // prev.next = removed.next;
  // return removed === head ? head.next : head;

  let fast = head,
    slow = head;
  for (let i = 0; i < n; i++) fast = fast.next;
  if(!fast) return head.next;
  while(fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};
// @lc code=end

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let root = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

console.log(removeNthFromEnd(root, 1));
