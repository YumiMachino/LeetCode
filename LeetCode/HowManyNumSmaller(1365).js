/*
https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
LeetCode #1365 How Many Numbers Are Smaller Than the Current Number  (EASY)
Run with : node HowManyNumSmaller.js
 */

/*
1. Approach
    input: nums = [8,1,2,2,3]
    output = [4,0,1,1,3]
    index 0 -> return number of num smaller than 8
    index 1 -> 
    index 2-> 
    .
    .
    .

    Brute Force-> for loop * n  -> n*n
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const frequencies = new Array(101).fill(0);
  const smaller = new Array(101).fill(0);

  nums.forEach((num) => frequencies[num]++);

  for (let i = 1; i < 101; i++) {
    smaller[i] = smaller[i - 1] + frequencies[i - 1];
  }

  return nums.map((num) => smaller[num]);
};
