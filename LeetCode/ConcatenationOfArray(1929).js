/*
https://leetcode.com/problems/concatenation-of-array/
LeetCode #1929 Concatenation of Array (EASY)
Run with : node ConcatenationOfArray.js
 */
/*
 * @param {number[]} nums
 * @return {number[]}
 */

/*
    1. Approach
        1. create a new array with size 2n
        2. loop through the new array, 
            - if index is larger than length of input array, use same value to i - input array length index
            - else copy the value from input array     -> O(N)
        3. return new array

        Time complexity: O(N)
        Space complexity: O(2N) -> O(N)
 */

var getConcatenation = function (nums) {
  let newArr = new Array(nums.length * 2);
  for (let i = 0; i < newArr.length; i++) {
    if (i >= nums.length) {
      newArr[i] = nums[i - nums.length];
    } else {
      newArr[i] = nums[i];
    }
  }
  return newArr;
};

// Test
const nums = [1, 2, 1];
const nums2 = [1, 3, 2, 1];
console.log(getConcatenation(nums2));
