/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  // function helper(curr, count) {
  //   if(!curr) return count;
  //   return Math.max(helper(curr.left, count + 1),  helper(curr.right, count + 1))
  // }
  
  // return helper(root, 0);

  if(!root) return 0;
  // root 不为null，层数 +1
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
// @lc code=end

