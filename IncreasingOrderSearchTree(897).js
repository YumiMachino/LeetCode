/*
https://leetcode.com/problems/increasing-order-search-tree/
LeetCode #897 Increasing Order Search Tree  (EASY)
Run with : node IncreasingOrderSearchTree.js
 */

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 1. Approach
 *  1. Left subtree of root
 *          -> check node.val = node.left.right
 *
 * node.left == null -> return
 * node.valとnode.left確認、
 * node.left.right !== null, node.val > node.left.right -> node.left.right.right = node
 * node.left.right == null, node.left.right = node.val
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  var helper = function (node, tree) {
    if (node.left) {
      tree = helper(node.left, tree);
      node.left = null;
    }
    tree.right = node;
    return node.right ? helper(node.right, node) : node;
  };

  const seed = {};
  helper(root, seed);
  return seed.right;
};

const root = new TreeNode(
  5,
  new TreeNode(1, null, null),
  new TreeNode(7, null, null)
);

increasingBST(root);
