/*
https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
LeetCode #1290 Convert Binary Number in a Linked List to Integer (EASY)
Run with : node ConvertBinaryNumberToInteger.js
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
  @param {ListNode} head
  @return {number}
 */

/*
     1. Approach
        1. create global variable to store each val of linked list
        2. Use while loop, to check node's val and store in the variable until node's next points to null                                                   -> O(N)
        3. convert variable from base 2 to base 10 using for loop    -> O(N)
        4. return the variable

    Time complexity:  O(N)
    Space complexity: O(1)

 */

var getDecimalValue = function (head) {
  let num = head.val; // safe because non-empty list
  while (head.next != null) {
    num = num * 2 + head.next.val;
    head = head.next;
  }
  return num;
};

// Test
const head = [1, 0, 1];
console.log(getDecimalValue(head));
