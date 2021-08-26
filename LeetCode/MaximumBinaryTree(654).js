/*
https://leetcode.com/problems/maximum-binary-tree/
LeetCode #654 Maximum Binary Tree (MEDIUM)
Run with : node MaximumBinaryTree.js
 */

/**
 * 1. Approach
 *  1. Use recursion, check the max value in the array (node.val),
 *                      check the max value in the left sub array (node.left)
 *                                                  right array (node.right)
 *    Time Complexity: O(N * N)
 *
 */

//  * Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  let helper = function (leftArrInd, rightArrInd) {
    let maxInd = leftArrInd;
    for (let i = maxInd; i < rightArrInd; i++) {
      if (nums[i] > nums[maxInd]) maxInd = i;
    }
    let rootNode = new TreeNode(nums[maxInd]);
    rootNode.left = leftArrInd >= maxInd ? null : helper(leftArrInd, maxInd);
    rootNode.right =
      maxInd + 1 >= rightArrInd ? null : helper(maxInd + 1, rightArrInd);
    return rootNode;
  };
  return helper(0, nums.length);
};

// Test
const nums = [3, 2, 1, 6, 0, 5];
constructMaximumBinaryTree(nums);
