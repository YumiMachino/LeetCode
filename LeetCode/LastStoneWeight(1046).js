/*
https://leetcode.com/problems/last-stone-weight/
LeetCode #1046 Last Stone Weight (EASY)
Run with : node LastStoneWeight.js
 */

/*
Approach
1. Find 2 biggest integer in the array 
        if 2 int is equal -> remove from the array
        if one is smaller -> return big-small, small is removed
        ... repeat until there is one int in the array or nothing
        return the int  | return 0
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    // sort array
    // compare the 2 biggest int
    stones = stones.sort(compare);
    // modify the array
    stones.push(stones.pop() - stones.pop());
  }
  return stones[0];

  function compare(a, b) {
    return a - b;
  }
};
