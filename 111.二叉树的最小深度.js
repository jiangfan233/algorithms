/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function (root) {
  // function go(node, count) {
  //   if(!node) return Number.MAX_SAFE_INTEGER;
  //   if(!node.left && !node.right) return count;
  //   let l = go(node.left, count + 1);
  //   let r = go(node.right, count + 1);
  //   return Math.min(l, r);
  // }
  // let ans = go(root, 1)
  // return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;

  // function go(node) {
  //   if(!node) return Number.MAX_SAFE_INTEGER;
  //   if(!node.left && !node.right) return 1;
  //   let l = go(node.left);
  //   let r = go(node.right);
  //   return Math.min(l, r) + 1;
  // }
  // let ans = go(root, 1)
  // return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;

  if (!root) return 0;
  if (!root.left && !root.right) return 1;
  if (!root.left) return 1 + minDepth(root.right);
  if (!root.right) return 1 + minDepth(root.left);
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
// @lc code=end
