/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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

function swap(prev, curr) {
  prev.next = curr.next;
  curr.next = prev;
}

var swapPairs = function (head) {
  // if (!head || !head.next) return head;
  // let node = head,
  //   ans = head.next,
  //   tmp;
  // while (node && node.next) {
  //   swap(node, node.next);
  //   tmp = node.next;
  //   if (tmp && tmp.next) {
  //     node.next = tmp.next;
  //     node = tmp;
  //   } else {
  //     break;
  //   }
  // }
  // return ans;

  if (!head || !head.next) return head;
  let ans = head.next,
    node = head.next.next;
  ans.next = head;
  head.next = swapPairs(node);
  return ans;
};
// @lc code=end

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let root = new ListNode(1, new ListNode(2, new ListNode(3)));

console.log(swapPairs(root));
