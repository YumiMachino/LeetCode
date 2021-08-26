/*
https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/
LeetCode #1557 Minimum Number of Vertices to Reach All Nodes (MEDIUM)
Run with : node MinimumNumOfVertices.js
 */

/*
 1. Approach
    DAG with n vertices from 0 to n-1
    array edges, edges[i] = [fromi, toi]   -> directed node fromi to ntoi

    return edge start

    edges = [[0,1], [0,2], [2,5],[3,4],[4,2]]
    
    0 -> 1, 2
    1 -> 
    2 -> 5
    3 -> 4
    4 -> 2
    only nodes from
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
  let map = new Array(n);
  let ans = [];

  for (let [index, value] of edges) {
    map[value] = 1;
  }

  for (let i = 0; i < n; i++) {
    if (!map[i]) ans.push(i);
  }
  return ans;
};
