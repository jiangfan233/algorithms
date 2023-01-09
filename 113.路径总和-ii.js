/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let ans = [];

  function search(buffer, sum, node) {
    if (!node) return;
    if (!node.left && !node.right && sum + node.val === targetSum) {
      return ans.push(buffer.concat(node.val));
    }
    buffer.push(node.val)
    search(buffer, sum + node.val, node.left);
    search(buffer, sum + node.val, node.right);
    buffer.pop();
  }
  search([], 0, root);
  return ans;
};
// @lc code=end
