/*
https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
LeetCode #1475 Final Prices With a Special Discount in a Shop (EASY)
Run with : node FinalPricesWithDiscount.js
 */

/**
 * 1. Approach
 *  1. Loop through the input array using for loop    -> 0(N)
 *      set a current pointer, then while stack is not empty, and last element of stack is bigger than current, modify the element
 *      otherwise, push the element
 *
 *  Time complexity: O(N * 2)
 *  Space complexity: O(N)
 *
 */

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let stack = [];
  for (let i = 0; i < prices.length; i++) {
    let curr = prices[i];
    while (stack.length && prices[stack[stack.length - 1]] >= curr) {
      prices[stack.pop()] -= curr;
    }
    stack.push(i);
  }
  return prices;
};
