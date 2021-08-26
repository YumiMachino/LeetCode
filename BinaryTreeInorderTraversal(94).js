/*
https://leetcode.com/problems/binary-tree-inorder-traversal/
LeetCode #94 Binary Tree Inorder Traversal  (EASY)
Run with : node BinaryTreeInorderTraversal.js
 */

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * 1. Approach
 *      1. Create empty array which will be return value
 *      2. Create helper function to check the node recursively (tree traversal inorder), recursive call ends when the node is null, untill then check the left of node, node.val, right of node in order. And push the node.value into the array.
 *      3. Execute helper function, and return the result array
 * 
 *      Time Complexity:  O(N)
 *          all the travarsal algorithms visit each node in a tree exactly once.
 *          Therefore the time complexity of all the traversal algorithms would be O(N) where a tree contains N nodes.
 *      Space Complexity: O(h)   -> h: tree height
 *          The addresses are removed from the stack when returning. This space is re-used when making a new call. So the maximum numbers of memory addresses on the stack at the same time is the tree height.
 * 
 * /

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let num = [];

  var helper = function (node) {
    if (!node) return;
    helper(node.left);
    num.push(node.val);
    helper(node.right);
  };
  helper(root);
  return num;
};

// Test
const root = new TreeNode(
  1,
  null,
  new TreeNode(2, new TreeNode(3, null, null), null)
);

console.log(inorderTraversal(root));
