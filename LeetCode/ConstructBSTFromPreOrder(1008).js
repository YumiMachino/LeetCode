/*
https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/
LeetCode #1008 Construct Binary Search Tree from  Pre-Order Traversal(EASY)
Run with : node ConstructBSTFromPreOrder.js
 */

/**
 * 1. Approach
 *      1. Loop though the input array using for loop, inside loop, create TreeNode(), assign it to helper function return value
 *      2. inside the helper function, take 2 arguments: node and value
 *          check node.val and val, then assign it to node.right or node.left
 */

//* Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  let root = TreeNode();
  for (let i = 0; i < preorder.length; i++) {
    root = helper(root, preorder[i]);
    console.log("root val: ", root);
  }
  return root;
};

var helper = function (node, val) {
  if (node) {
    if (node.val < val) {
      node.right = helper(node.right, val);
    } else {
      node.left = helper(node.left, val);
    }
    return node;
  } else {
    return new TreeNode(val);
  }
};

// Test
const preorder = [8, 5, 1, 7, 10, 12];
bstFromPreorder(preorder);
