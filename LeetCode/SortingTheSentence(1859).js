/*
https://leetcode.com/problems/sorting-the-sentence/
LeetCode #1859 Sorting the Sentence  (EASY)
Run with : node SortingTheSentence.js
 */

/*
1. Approach
    looping through each, find the num, put it into the array with the index
    convert it to array to str
 */

/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  s = s
    .split(" ")
    .sort((a, b) => a[a.length - 1] - b[b.length - 1])
    .join(" ");
  return s.replace(/[0-9]/g, "");
};
