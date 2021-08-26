/*
https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
LeetCode #1379 Find a Corresponding Node of a Binary Tree in a Clone of that tree (MEDIUM)
Run with : node FindCorrespondingNode.js
 */

//Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  var helper = function (oNode, cNode) {
    if (!oNode) return;
    if (oNode === target) return cNode;
    return helper(oNode.left, cNode.left) || helper(oNode.right, cNode.right);
  };
  return helper(original, cloned);
};
