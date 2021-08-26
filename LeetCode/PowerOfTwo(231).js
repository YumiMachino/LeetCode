/*
https://leetcode.com/problems/power-of-two/
LeetCode #231 Power Of Two (EASY)
Run with : node PowerOfTwo.js
 */

/*
1. Approach

    keep dividing by 2 (n/2) each
     
    Time complexity: O(log n)

 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n === 1) {
    return true;
  } else if (n <= 0) {
    return false;
  }

  if (n % 2 !== 0) {
    return false;
  } else {
    return isPowerOfTwo(Math.floor(n / 2));
  }
};
