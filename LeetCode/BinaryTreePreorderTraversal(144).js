/*
https://leetcode.com/problems/binary-tree-preorder-traversal/
LeetCode #144 Binary Tree Preorder Traversal  (EASY)
Run with : node BinaryTreePreorderTraversal.js
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
var preorderTraversal = function (root) {
  const num = [];

  var helper = function (node) {
    if (!node) return;
    num.push(node.val);
    helper(node.left);
    helper(node.right);
  };
  helper(root);
  return num;
};

// Test
const root = new TreeNode(1, new TreeNode(2, null, null), null);
const root2 = new TreeNode(1, null, new TreeNode(2, null, null));
console.log(preorderTraversal(root2));
