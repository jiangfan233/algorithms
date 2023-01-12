/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  // function go(node) {
  //   if (node && node.left) {
  //     let right = node.right;
  //     node.right = node.left;
  //     node.left = null;
  //     let end = go(node.right);
  //     if (right) {
  //       end.right = right;
  //       return go(end.right);
  //     } else {
  //       return end;
  //     }
  //   } else if (node && node.right) {
  //     return go(node.right);
  //   }
  //   return node;
  // }
  // go(root);
  // return root;

  /**
   * 卡在简化逻辑
   */
  // if (!root) return root;
  // let node = root;
  // if (node.left) {
  //   let right = node.right;
  //   node.right = node.left;
  //   node.left = null;
  //   let end = flatten(node.right);
  //   if (right) {
  //     end.right = right;
  //     return flatten(end.right);
  //   } else {
  //     return end;
  //   }
  // } else if (node.right) {
  //   return flatten(node.right);
  // }
  // return root;

  let head = null;
  const go = (node) => {
    if (node.right) go(node.right);
    if (node.left) go(node.left);
    node.left = null;
    node.right = head;
    head = node;
  };
  if(root) go(root);
  return root;
};
// @lc code=end
