/*
https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
LeetCode #1614 Maximum Nesting Depth of the Parentheses (EASY)
Run with : node MaximumNestingDepthOfTheParentheses.js
 */

/**
 * 1. Approach
 *      1. Create maxDepth, and stack variable. Loop through the input using for loop       - O(N)
 *      2. when there's "(", put it in stack, when there's ")", pop. before pop, stack.choose the bigger either length of stack or at the time of maxDepth
 *      3. return the maxDepth
 *
 *      Time Complexity: O(N)
 *      Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let maxDepth = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else if (s[i] === ")") {
      maxDepth = Math.max(maxDepth, stack.length);
      stack.pop();
    }
  }
  return maxDepth;
};

// Test
const s = "(1+(2*3)+((8)/4))+1";
maxDepth(s);
