/*
https://leetcode.com/problems/all-paths-from-source-to-target/
LeetCode #797 All Paths From Source to Target (MEDIUM)
Run with : node AllPathsFromSourceToTarget.js
 */

/*
1. Approach
     input: graph = [[1,2],[3],[3], []]
     [i] -> list of all nodes connected
     0 -> 1, 2
     1 -> 3
     3 -> 3
     4 -> 
    There are 2 path.
    Starting from 0 -> 1 -> 3
                  0 -> 2 -> 3

    - check the nodes inside index 0 -> (1, 2)
        - check the index of nodes    index1 -> 3, index2 -> 3  .... untill null using recursion(DFS, find the end of the path each time before moving on)
    for one round, put it to the array  

    Time Complexity: O(N + E)    number of nodes + edges
 */

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  var paths = [];

  const dfs = (index, path) => {
    // check if there is one node in the target index
    if (path[path.length - 1] == graph.length - 1) {
      paths.push(path);
      return;
    }
    // check all nodes inside the index
    for (let i = 0; i < graph[index].length; i++) {
      dfs(graph[index][i], [...path, graph[index][i]]);
    }
  };
  dfs(0, [0]);
  return paths;
};
