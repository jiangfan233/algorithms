/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

// 前序遍历： 根左右
function preorderTraversal(root: TreeNode | null): number[] {
  // let arr: (TreeNode | null)[] = [root];
  // let ans: number[] = [];
  // while (arr.length) {
  //   const node = arr.pop()!;
  //   if (!node) continue;
  //   ans.push(node.val);
  //   arr.push(node.right);
  //   arr.push(node.left);
  // }
  // return ans;


  // if(!root) return [];
  // return [root.val].concat(preorderTraversal(root.left), preorderTraversal(root.right));


  let ans :number[] = [];
  let arr :TreeNode[] = [root!];
  while(arr.length) {
    const node = arr.pop()!
    if(!node) continue;
    ans.push(node.val);
    arr.push(node.right!);
    arr.push(node.left!);
  }
  return ans;
};
// @lc code=end

