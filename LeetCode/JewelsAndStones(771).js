/*
https://leetcode.com/problems/jewels-and-stones/
LeetCode #771 Jewels and Stones (EASY)
Run with : node JewelsAndStones.js
 */

/*
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

/*
    1. Brute Force Approach
        1. create a variable that stores count
        2. loop through stones to check each letter 
        3. loop through jewels to check if there is match, if they are count ++
        4. return count

    Time complexity: O(N * M)
    Space complexity: O(1)
*/

var numJewelsInStones = function (jewels, stones) {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones.substring(i, i + 1) === jewels.substring(j, j + 1)) {
        count = count + 1;
      }
    }
  }
  return count;
};

// Test
const jewels = "aA";
const stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));

const jewels2 = "z";
const stones2 = "ZZ";
console.log(numJewelsInStones(jewels2, stones2));

/*
    2. Hash Table Approach
        1. compute key's hash code               
        2. map the hash code to an index of an array    -> Insert =>  O(1)
        3. At this index, store key and value of linked list.
        4. retrieve value pair by its key, return the count   -> Lookup => good: O(1),  bad O(N)

    Time complexity: O(1)
    Space complexity: O(ArraySize?)
*/

var hashTableNumJewelsInStones = function (jewels, stones) {
  let count = 0;

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones.substring(i, i + 1) === jewels.substring(j, j + 1)) {
        count = count + 1;
      }
    }
  }
  return count;
};
