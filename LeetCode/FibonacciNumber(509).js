/*
https://leetcode.com/problems/fibonacci-number/
LeetCode #509 Fibonacci Number  (EASY)
Run with : node FibonacciNumber.js
 */

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
};
