/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  // if(!head) return head;

  // let left = head, right = head.next;
  // while(right) {
  //   if(right.val !== left.val) {
  //     left.next = right;
  //     left = right;
  //   }
  //   right = right.next;
  // }
  // left.next = null;
  // return head;

  let curr = head;
  while(curr) {
    if(curr.next && curr.val == curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};
// @lc code=end

