/*
https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/
LeetCode #1464 Maximum Product of Two Elements in an Array (EASY)
Run with : node MaxProductOfTwoElements.js
 */

/*
Approach
 1. Find 2 biggest integers in the array (sort or acsending order)
        return (num - 1) * (num - 1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  nums = nums.sort((a, b) => a - b);
  return (nums[nums.length - 1] - 1) * (nums[nums.length - 2] - 1);
};
