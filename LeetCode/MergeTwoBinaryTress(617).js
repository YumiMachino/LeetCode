/*
https://leetcode.com/problems/merge-two-binary-trees/
LeetCode #617 Merge Two Binary Trees  (EASY)
Run with : node MergeTwoBinaryTress.js
 */

/*
1. Approach  -Brute Force
    1. using 2 pointers, loop through the root while the value === null
    2. when each times, whern 1 root has value && the other value === null -> sums up, and place it in a new root
        when both pointers point both of the nodes val === null, return 
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

var mergeTrees = function (root1, root2) {
  if (!root1) return root2;
  if (!root2) return root1;
  root1.left = mergeTrees(root1.left, root2.left);
  root1.right = mergeTrees(root1.right, root2.right);
  root1.val = root1.val + root2.val;
  return root1;
};

// Test
const root1 = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(5, null, null), null),
  new TreeNode(2, null, null)
);

const root2 = new TreeNode(
  2,
  new TreeNode(
    1,
    null,
    new TreeNode(4, null, null),
    new TreeNode(3, null, new TreeNode(7, null, null))
  )
);

mergeTrees(root1, root2);
