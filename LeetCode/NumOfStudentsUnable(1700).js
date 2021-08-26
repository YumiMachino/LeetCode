/*
https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
LeetCode #1700 Number of Students Unable to Eat Lunch (EASY)
Run with : node NumOfStudentsUnable.js
 */

/**
 * 1. Approach
 *      1. Loop through the sandwiches array using for loop, with each element
 *              check the first element of student,
 *                  if matched, pop the stack, dequeue the queue.
 *                  else deque, and enque the element
 *
 *          Time Complexity: O(N)
 *          Space Complexity: O(N)
 */

//shift-> take out first element
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let count = 0;
  while (students.length !== 0) {
    let curr = students.shift();

    if (curr === sandwiches[0]) {
      sandwiches.shift();
      count = 0;
    } else {
      students.push(curr);
      if (students.length < count) {
        break;
      }
      count++;
    }
  }
  return students.length;
};

// Test
const students = [1, 1, 1, 0, 0, 1],
  sandwiches = [1, 0, 0, 0, 1, 1];

countStudents(students, sandwiches);
