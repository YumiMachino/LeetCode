/*
https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
LeetCode #1022 Sum of Root To Lead Binary Numbers  (EASY)
Run with : node SumOfRootLeafBinaryNumber.js
 */

/**
 * 1. Extract all patterns, and store it as string, using recursion, string length === height
 *  2. Convert it from binary to decimal
 *  3. Return all the sum
 */

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  let sum = 0;
  var helper = function (root, str) {
    if (root === null) {
      return 0;
    }
    str += root.val;
    if (!root.left && !root.right) {
      // parseInt() returns integer from string
      return parseInt(str, 2);
    }
    return helper(root.left, str) + helper(root.right, str);
  };
  return helper(root, "");
};

// Test
const root = new TreeNode(
  1,
  new TreeNode(0, new TreeNode(0, null, null), new TreeNode(1, null, null)),
  new TreeNode(1, new TreeNode(0, null, null), new TreeNode(1, null, null))
);

console.log(root);
console.log(sumRootToLeaf(root));
