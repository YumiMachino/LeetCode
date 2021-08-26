/*
https://leetcode.com/problems/binary-tree-postorder-traversal/
LeetCode #145 Binary Tree Postorder Traversal  (EASY)
Run with : node BinaryTreePostOrderTraversal.js
 */

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const num = [];

  var helper = function (node) {
    if (!node) return;
    helper(node.left);
    helper(node.right);
    num.push(node.val);
  };
  helper(root);
  return num;
};

// Test
const root = new TreeNode(1, new TreeNode(2, null, null), null);
const root2 = new TreeNode(1, null, new TreeNode(2, null, null));
// console.log(postorderTraversal(root));
console.log(postorderTraversal(root2));
