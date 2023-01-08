/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
  // 自顶向下，暴力求解
  // function calHeight(node) {
  //   if (!node) return 0;
  //   if(map.has(node)) {
  //     return map.get(node);
  //   } else {
  //     let ans = 1 + Math.max(calHeight(node.left), calHeight(node.right));
  //     map.set(node, ans);
  //     return ans;
  //   }
  // }
  // let queue = [root], map = new Map(), curr;
  
  // while(queue.length) {
  //   curr = queue.pop();
  //   if (!curr) continue;
  //   let ans = Math.abs(calHeight(curr.left) - calHeight(curr.right));
  //   if(ans > 1) return false;
  //   queue.push(curr.left, curr.right);
  // }
  // return true;

  function calHeight(node) {
    if (!node) return 0;
    let l = calHeight(node.left);
    if (l === -1) return -1;

    let r = calHeight(node.right);
    if (r === -1) return -1;

    if (Math.abs(l - r) > 1) return -1;
    return 1 + Math.max(l, r);
  }

  if (root === null) return true;
  // if(Height(root) === -1) return false;
  if (calHeight(root) === -1) return false;
  return true;
};

function Height(root) {
  /**
   * 递归到最底层元素后计算左右子树高度
   */
  if (root === null) return 0;
  let leftHeight = Height(root.left);
  let rightHeight = Height(root.right);
  if (leftHeight === -1 || rightHeight === -1) return -1;
  if (Math.abs(leftHeight - rightHeight) > 1) return -1;
  return Math.max(leftHeight, rightHeight) + 1;
}

// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

console.log(isBalanced(
  new TreeNode(
    3,
    new TreeNode(9, null, null),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  )
));
