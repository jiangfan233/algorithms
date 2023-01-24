/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function postorderTraversal(root: TreeNode | null): number[] {
  // const go = (node: TreeNode | null) => {
  //   if (!node) return;
  //   if (!node.left && !node.right) {
  //     ans.push(node.val);
  //     return;
  //   }
  //   go(node.left);
  //   go(node.right);
  //   ans.push(node.val);
  // }
  // let ans: number[] = [];
  // go(root);
  // return ans;

  let arr :(TreeNode | null)[] = [root];
  let ans :number[] = [];
  while(arr.length) {
    let curr = arr.pop();
    if(!curr) continue;
    arr.push(curr.left);
    arr.push(curr.right);
    ans.push(curr.val);
  }
  return ans.reverse();
};
// @lc code=end

