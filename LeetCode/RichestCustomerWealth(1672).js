/*
https://leetcode.com/problems/richest-customer-wealth/
LeetCode #1672 Richest CustomerWealth (EASY)
Run with : node RichestCustomerWealth.js
 */

/*
 * @param {number[][]} accounts
 * @return {number}
 */

/*
    1. Approach
        1. create variable richest to hold the largest amount
        1. Loop through the input bigger array                                  O(N * 3)
        2. in each loop, loop through the input smaller array to add sum, 
            - if the sum > richest, replace
        3. return richest

    Time complexty: O(N)
    Space complexity: O(1)
*/

var maximumWealth = function (accounts) {
  let richest = 0;
  let sum = 0;
  for (let i = 0; i < accounts.length; i++) {
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    if (sum > richest) {
      richest = sum;
    }
    sum = 0;
  }
  return richest;
};

// Test
const accounts = [
  [1, 2, 3],
  [3, 2, 1],
];

const accounts2 = [
  [1, 5],
  [7, 3],
  [3, 5],
];

const accounts3 = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];


console.log(maximumWealth(accounts));
console.log(maximumWealth(accounts2));
console.log(maximumWealth(accounts3));
