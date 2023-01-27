/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

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

// 中序遍历： 左根右
function inorderTraversal(root: TreeNode | null): number[] {
  // let curr = root;
  // let arr: TreeNode[] = [];
  // let ans: number[] = [];
  // while (curr || arr.length) {
  //   if (curr) {
  //     arr.push(curr);
  //     curr = curr.left;
  //   } else {
  //     curr = arr.pop()!;
  //     ans.push(curr.val);
  //     curr = curr.right;
  //   }
  // }
  // return ans;


  // let curr = root;
  // let arr: TreeNode[] = [];
  // let ans: number[] = [];
  // while (curr || arr.length) {
  //   if (!curr) {
  //     curr = arr.pop()!;
  //     ans.push(curr.val);
  //     curr = curr.right;
  //   } else {
  //     arr.push(curr);
  //     curr = curr.left;
  //   }
  // }
  // return ans;

  // if(!root) return [];
  // return inorderTraversal(root.left).concat(root.val, inorderTraversal(root.right));

  let ans: number[] = [];
  let curr = root;
  let arr: TreeNode[] = [];
  while (curr || arr.length) {
    if (curr) {
      arr.push(curr!);
      curr = curr.left;
    } else {
      curr = arr.pop()!;
      ans.push(curr.val);
      curr = curr.right;
    }
  }
  return ans;
};
// @lc code=end

inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3))))

