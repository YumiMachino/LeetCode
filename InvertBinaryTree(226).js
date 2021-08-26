/*
https://leetcode.com/problems/invert-binary-tree/
LeetCode #226 Invert Binary Tree  (EASY)
Run with : node InvertBinaryTree.js
 */

/*
1. Approach
    Time complexity: O(n) 最悪一列のツリー

 */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;
  let left = invertTree(root.left);
  let right = invertTree(root.right);

  root.left = right;
  root.right = left;
  return root;
};

const root = new TreeNode(
  2,
  new TreeNode(1, null, null),
  new TreeNode(3, null, null)
);

console.log(invertTree(root));
