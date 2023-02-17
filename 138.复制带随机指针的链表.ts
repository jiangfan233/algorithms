/*
 * @lc app=leetcode.cn id=138 lang=typescript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/* *
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  
  if(!head) return null;
  const map = new WeakMap();
  const res = new Node(0);
  let curr = head;
  let newHead = res;

  while(curr) {
    newHead.val = curr.val;
    map.set(curr, newHead);
    if(!curr.next) break;
    newHead.next = new Node(0);
    newHead = newHead.next;
    curr = curr.next;
  }

  curr = head;
  while(curr) {
    // 根据旧的节点拿到对应的新节点,并设置新节点的random指向
    map.get(curr).random = map.get(curr.random);
    curr = curr.next;
  }
  return res;
}
// @lc code=end

