/*
https://leetcode.com/problems/maximum-product-difference-between-two-pairs/
LeetCode #1913 Maximum Product Difference Between Two Pairs  (EASY)
Run with : node MaxProductDiffBtwPairs.js
 */

var maxProductDifference = function (nums) {
  nums = nums.sort(compare);
  return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
};
function compare(a, b) {
  return a - b;
}
