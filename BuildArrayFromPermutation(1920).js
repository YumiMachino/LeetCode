/*
https://leetcode.com/problems/build-array-from-permutation/
LeetCode #1920 Build Array from Permutation (EASY)
Run with : node BuildArrayFromPermutation.js
 */
/*
  @param {number[]} nums
  @return {number[]}
 */

/*
1. Approach
    1. check through input array using for loop  -> O(N)
    2. push the value of array of the index to new array -> O(1)
    3. return new array     -> O(1)

    Time complexity: O(N)
    Space complexity: O(N)
*/
var buildArray = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[nums[i]]);
  }
  return ans;
};

// Test
nums = [5, 0, 1, 2, 3, 4];
console.log(buildArray(nums));
