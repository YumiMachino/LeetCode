/*
https://leetcode.com/problems/univalued-binary-tree/
LeetCode #965 Univalued Binary Tree (EASY)
Run with : node UnivaluatedBinaryTree.js
 */

/*
1. Approach
    1. store root value
    2. create helper function to check every node in the tree using recursion
        return true if the node is null (meaning it's checked everything)
        if node.val differs from node.left.value, or from node.right.value, return false;
    3. return the helper function


    Time Complexity: worst case, it has to visit every nodes to check -> O(N)
    Space Complexity: memory would be stacked as height -> O(h)
 */

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  const val = root.val;
  var helper = function (node, val) {
    if (!node) return true;
    if (node.val != val) return false;
    return helper(node.left, val) && helper(node.right, val);
  };
  return helper(root, val);
};

const root = new TreeNode(
  1,
  new TreeNode(1, new TreeNode(1, null, null), new TreeNode(1, null, null)),
  new TreeNode(1, null, new TreeNode(1, null, null))
);

const root2 = new TreeNode(
  2,
  new TreeNode(2, new TreeNode(5, null, null), new TreeNode(2, null, null)),
  new TreeNode(2, null, null)
);

console.log(isUnivalTree(root));
console.log(isUnivalTree(root2));
