/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  function search(buffer, node) {
    if (!node) return;
    buffer = buffer.length > 0 ? `${buffer}->${node.val}` : `${node.val}`;
    if (!node.left && !node.right)
      // return ans.push(buffer.concat(node.val).join("->"));
      return ans.push(buffer);

    // buffer.push(node.val);
    // search(buffer, node.left);
    // search(buffer, node.right);
    // buffer.pop();

    search(buffer, node.left);
    search(buffer, node.right);
  }

  let ans = [];
  // search([], root);
  search("", root);
  return ans;

  // if (!root) return [];
  // if (!root.left && !root.right) {
  //   return [`${root.val}`];
  // } else {
  //   const left = binaryTreePaths(root.left).map(
  //     (num) => `${root.val}->${num}`
  //   );
  //   const right = binaryTreePaths(root.right).map(
  //     (num) => `${root.val}->${num}`
  //   );
  //   return [...left, ...right];
  // }
};
// @lc code=end
