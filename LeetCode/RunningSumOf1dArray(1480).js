/*
https://leetcode.com/problems/running-sum-of-1d-array/
LeetCode #1480 Running Sum of 1d Array (EASY)
Run with : node RunningSumOf1dArray.js
 */

/*
 * @param {number[]} nums
 * @return {number[]}
 */

/*
1. Approach
    1. create a variable that holds running sum, and new array      -> O(1) + O(N)
    2. loop through the input array, adds up to running sum, place it to new array -> O(N)
    3. return new array

    Time complexity: O(N)
    Space complexity: O(N)
*/

var runningSum = function (nums) {
  let runningSum = 0;
  let newArr = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i];
    newArr[i] = runningSum;
  }
  return newArr;
};

// Test
const nums = [1, 2, 3, 4];
const nums2 = [1, 1, 1, 1, 1];
const nums3 = [3, 1, 2, 10, 1];
console.log(runningSum(nums));
console.log(runningSum(nums2));
console.log(runningSum(nums3));
