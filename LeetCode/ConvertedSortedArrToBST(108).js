/*
https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
LeetCode #108 Convert Sorted Array to Binary Search Tree  (EASY)
Run with : node ConvertedSortedArrToBST.js
 */

/*
1. Approach
    1. middle Index of the input array -> root      O(N)
        left subtree -> left side of the middle Index (keep adding the value to node using loop)                
        right subtree -> right side of the middle Index (keep adding the value to node using loop)

        Time Complexity: O(N)
        Space Complexity: O(N)
 */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  var helper = function (low, high) {
    if (low > high) return null;
    const mid = Math.floor((low + high) / 2);
    const node = new TreeNode(nums[mid]);
    node.left = helper(low, mid - 1);
    node.right = helper(mid + 1, high);
    return node;
  };
  return helper(0, nums.length - 1);
};

const nums = [-10, -3, 0, 5, 9];
sortedArrayToBST(nums);
