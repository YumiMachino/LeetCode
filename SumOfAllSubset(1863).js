/*
https://leetcode.com/problems/sum-of-all-subset-xor-totals/
LeetCode #1863 Sum of All Subset XOR Totals (EASY)
Run with : node SumOfAllSubset.js
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let res = [];

  function backtrack(start = 0, arr = [nums[0]]) {
    res.push([...arr].reduce((a, b) => a ^ b, 0));
    for (let i = start; i < nums.length; i++) {
      arr.push(nums[i]);
      backtrack(i + 1, arr);
      arr.pop();
    }
  }

  backtrack();
  return res.reduce((a, b) => a + b);
};
