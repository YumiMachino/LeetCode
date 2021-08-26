/*
https://leetcode.com/problems/deepest-leaves-sum/
LeetCode #1302 Deepest Leaves Sum (MEDIUM)
Run with : node DeepestLeavesSum.js
 */

/*
1. Approach
    1. Figure out the depth of the input tree 
        - use depth variable to store
        - use recursion 
    2. Sum the node at the depth
    3. return the depth variable

    Time Complexity: O(h)     -> all nodes have to be checked
    Space Complexity: O(1)
*/

//Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let sums = [];

  const helper = (node, depth) => {
    if (depth === sums.length) sums[depth] = node.val;
    else sums[depth] += node.val;
    if (node.left) helper(node.left, depth + 1);
    if (node.right) helper(node.right, depth + 1);
  };
  helper(root, 0);
  return sums[sums.length - 1];
};

const root = new TreeNode(
  1,
  new TreeNode(
    2,
    new TreeNode(4, new TreeNode(7, null, null), null),
    new TreeNode(5, null, null)
  ),
  new TreeNode(
    3,
    null,
    new TreeNode(6, null, null),
    new TreeNode(8, null, null)
  )
);

deepestLeavesSum(root, 0);
