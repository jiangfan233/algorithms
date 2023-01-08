/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {

  /**
   * 前序遍历： 先遍历根节点，再遍历左子节点，最后遍历右子节点
   */

  // 递归
  // function go(node) {
  //   if(!node) return;
  //   ans.push(node.val);
  //   go(node.left);
  //   go(node.right);
  // }
  // let ans = [];
  // go(root);
  // return ans;

  // 迭代
  if(!root) return [];
  let ans = [], queue = [root];
  while(queue.length) {
    const node = queue.pop();
    ans.push(node.val);
    if(node.right) queue.push(node.right);
    if(node.left) queue.push(node.left);
  }
  return ans;
};
// @lc code=end

console.log(preorderTraversal)
