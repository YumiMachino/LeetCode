/*
https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
LeetCode #1047 Remove All Adjacent Duplicates In String (EASY)
Run with : node RemoveAllAdjacentDuplicates.js
 */

/**
 * 1. Approach
 *      1. Loop through input array, put each element in the stack,
 *          when putting the element, check the last element on top, if it's the same value, pop the stack        -> O(N)
 *       2. Convert the stack to string, and return it   -> O(N)
 *
 *      Time Complexity: O(N)
 *      Space Complexity: O(1)
 */

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (i == 0) {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] === s[i]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  }
  let str = "";
  for (let j = 0; j < stack.length; j++) {
    str = str + stack[j];
  }
  return str;
};

// Test
// const s = "abbaca";
// const s = "azxxzy";
// removeDuplicatesRev(s);

//---- Simpler syntax -------------------------
var removeDuplicatesRev = function (s) {
  const stack = [];
  for (letter of s) {
    let lastElement = stack[stack.length - 1];
    if (letter === lastElement) {
      stack.pop();
      continue;
    }
    stack.push(letter);
  }
  console.log("join: ", stack.join(""));
  return stack.join("");
};

// Test
const s = "azxxzy";
removeDuplicatesRev(s);
