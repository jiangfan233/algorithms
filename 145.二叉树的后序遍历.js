/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  // let ans = [];
  // function go(node) {
  //   if(!node) return;
  //   go(node.left);
  //   go(node.right);
  //   ans.push(node.val);
  // }
  // go(root);
  // return ans;

  if(!root) return [];
  let ans = [],
    queue = [root],
    node;
  while (queue.length) {
    node = queue.pop();
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    ans.push(node.val);
  }
  return ans.reverse();
};
// @lc code=end
