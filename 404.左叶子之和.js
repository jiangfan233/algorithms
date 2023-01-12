/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  // function search(node, flag) {
  //   if (!node) return 0;
  //   if (!node.left && !node.right) return flag ? node.val : 0;
  //   return search(node.left, true) + search(node.right, false);
  // }
  // return search(root, false);

  // 广度优先搜索
  const isLeafNode = (node) => node && !node.left && !node.right;
  let ans = 0,
    queue = [root];
  while (queue.length) {
    const node = queue.shift();
    if (!node) continue;
    if (isLeafNode(node.left)) {
      ans += node.left.val;
    } else {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }
  return ans;
};
// @lc code=end
