/*
https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
LeetCode #1337 The K Weakest Rows in a Matrix (EASY)
Run with : node TheKWeakestRows.js
 */

/*
Approach
1. check num of soldiers in each row 
2. return the kth index of the least soldiers 
 */

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const count = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 1) {
        count++;
      }
    }
    return count;
  };

  let ret = [];
  let maps = new Map();

  // count the 1's for each index in the matrix
  for (let i = 0; i < mat.length; i++) {
    maps.set(i, count(mat[i]));
  }

  // sort the map by value
  let sorted = [...maps.entries()].sort((a, b) => a[1] - b[1]);

  // filter the keys of sorted array
  sorted.filter((item) => {
    ret.push(item[0]);
  });

  // return only k value in the array
  return ret.slice(0, k);
};
