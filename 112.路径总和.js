/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  function search(node, buffer) {
    if (!node) return false;
    if (!node.left && !node.right) return buffer + node.val === targetSum;
    return (
      search(node.left, buffer + node.val) ||
      search(node.right, buffer + node.val)
    );
  }
  return search(root, 0);
};
// @lc code=end
