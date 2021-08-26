/*
https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
LeetCode #1038 Binary Search Tree to Greater Sum Tree  (MEDIUM)
Run with : node BSTToGST.js
 */

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
 * @return {TreeNode}
 */
var bstToGst = function (root) {
  let node = root;
  let sum = 0;

  var helper = function (node) {
    node.right && helper(node.right);
    node.val += sum;
    sum = node.val;
    node.left && helper(node.left);
  };
  helper(node);
  return root;
};
