/*
https://leetcode.com/problems/reverse-string/
LeetCode #344 Reverse String  (EASY)
Run with : node ReverseString.js
 */

/*
1. Approach
    using 2 pointers(first index, last index), swap the position
    use for loop, continue until reaching to the middle index

    Time Complexity: O(n/2)    -> O(n)
    Space Complexity: O(1)
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    const temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
  console.log("result: ", s);
};

const s = ["h", "e", "l", "l", "o"];
reverseString(s);
