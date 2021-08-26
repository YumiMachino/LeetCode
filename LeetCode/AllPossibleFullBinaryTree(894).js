/*
https://leetcode.com/problems/all-possible-full-binary-trees/
LeetCode #894 All Possible Full Binary Trees  (MEDIUM)
Run with : node AllPossibleFullBinaryTree.js
 */

/*
1. Approach
 
    input n = 7
    return n nodes (val == 0)
    leaf -> either 2 or 2

    create node class(with 2 leaf) 
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
 * @param {number} n
 * @return {TreeNode[]}
 */

const memo = [[null]];
var allPossibleFBT = function (n) {
  if (memo[n]) return memo[n];

  const ans = [];

  if (n % 2 === 1) {
    for (let i = 0; i < n; i++) {
      const j = n - 1 - i;
      for (let left of allPossibleFBT(i)) {
        for (let right of allPossibleFBT(j)) {
          const node = new TreeNode();
          node.left = helper(left);
          node.right = helper(right);
          ans.push(node);
        }
      }
    }
  }

  memo[n] = ans;
  return memo[n];
};

 var helper = function (node) {
   if (!node) return null;
   const root = new TreeNode(node.val);
   root.left = helper(node.left);
   root.right = helper(node.right);
   return root;
 };