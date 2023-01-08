/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function helper(arr, start, end) {
    if (start > end) return null;
    if (start === end) return new TreeNode(arr[start]);
    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode(arr[mid]);
    node.left = helper(arr, start, mid - 1);
    node.right = helper(arr, mid + 1, end);
    return node;

    // return new TreeNode(
    //   arr[mid],
    //   helper(arr, start, mid - 1),
    //   helper(arr, mid + 1, end)
    // );
  }

  return helper(nums, 0, nums.length - 1);
};
// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));


