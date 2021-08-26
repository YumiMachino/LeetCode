/*
https://leetcode.com/problems/remove-outermost-parentheses/
LeetCode #1021 Remove Outermost Parentheses (EASY)
Run with : node RemoveOutermostParentheses.js
 */

/*
1. Approach
    1. Loop through the input using for loop    -> O(N)
    2. when '(', push, increase count, when ')', pop
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let result = "";
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      if (stack.length) {
        result += s[i];
      }
      stack.push(s[i]);
    } else {
      stack.pop();
      if (stack.length) {
        result += s[i];
      }
    }
  }
  return result;
};

// Test
const s = "(()())(())";
removeOuterParentheses(s);
