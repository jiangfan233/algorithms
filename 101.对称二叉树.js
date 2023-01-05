/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  
  function helper(l, r) {
    if(!l && !r) return true;
    if(!l || !r || l.val !== r.val) return false;
    
    return helper(l.left, r.right) && helper(l.right, r.left);
  }
  return helper(root, root);
};
// @lc code=end

