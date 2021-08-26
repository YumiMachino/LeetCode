/*
https://leetcode.com/problems/range-sum-of-bst/
LeetCode #938 Range Sum of BST  (EASY)
Run with : node RangeSumOfBST.js
 */

/**
 * 1. Approach
 *      1. Use recursion from root node
 *          -  when node.val === null -> break
 *          - low <= node.val <= high -> add to sum
 *
 * Time complexity of all BST operations = O(h) h = Height
 *  Time Complexity: O(N*N)
 */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let sum = 0;

  var helper = function (root) {
    if (root === null) {
      return;
    }
    if (low <= root.val && root.val <= high) {
      sum += root.val;
    }
    helper(root.left);
    helper(root.right);
  };

  helper(root);
  return sum;
};

// Test
const root = new TreeNode(
  10,
  new TreeNode(5, new TreeNode(3, null, null), new TreeNode(7, null, null)),
  new TreeNode(15, null, new TreeNode(18, null, null))
);

rangeSumBST(root, 7, 15);
