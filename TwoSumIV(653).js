/*
https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
LeetCode #653 Two Sum IV - Input is a BST  (EASY)
Run with : node TwoSumIV.js
 */

/*
1. Approach
    Using recursion, store every nodes value in an array inside helper function
    using for loop, check inside array to find 2 elements sums to the target value;
 */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const elems = [];
  const helper = (root) => {
    if (!root) return;
    elems.push(root.val);
    if (root.left) helper(root.left);
    if (root.right) helper(root.right);
  };
  helper(root);

  for (let i = 0; i < elems.length - 1; i++) {
    for (let j = i + 1; j < elems.length; j++) {
      if (elems[i] + elems[j] === k) return true;
    }
  }
  return false;
};

const root = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2, null, null), new TreeNode(4, null, null)),
  new TreeNode(6, null, new TreeNode(7, null, null))
);

console.log(findTarget(root, 9));
