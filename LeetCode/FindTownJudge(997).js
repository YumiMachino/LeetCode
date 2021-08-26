/*
https://leetcode.com/problems/find-the-town-judge/
LeetCode #997 Find the Town Judge (EASY)
Run with : node FindTownJudge.js
 */

/*
 Time Complexity: O(N)
 Space Complexity: O(N)
 */

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if (n === 1 && trust.length === 0) {
    return n;
  }
  // store each person's trust, index represents person
  let trustCount = new Array(n + 1).fill(0); //->Space: O(N)
  for (let [a, b] of trust) {
    // if person is a, the person trust somebody            //-Time >O(N)
    trustCount[a] = trustCount[a] - 1;
    // b is trusted
    trustCount[b] = trustCount[b] + 1;
  }

  for (let i = 0; i < trustCount.length; i++) {
    // -> Time: O(N)
    // should be everyone except judge trust judge
    if (trustCount[i] === n - 1) {
      return i;
    }
  }
  return -1;
};

const n = 2;
const trust = [[1, 2]];

console.log(findJudge(n, trust));

const n2 = 1;
const trust2 = [];

console.log(findJudge(n2, trust2));
