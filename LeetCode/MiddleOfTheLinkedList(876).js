/*
https://leetcode.com/problems/middle-of-the-linked-list/
LeetCode #876 Middle of the Linked List (EASY)
Run with : node MiddleOfTheLinkedList.js
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
    1. Approach: Array
        1. put it to array using while loop
        2.  return the middle node

     Time complexity: O(N)
     Space complexity: O(N)   
 */

var middleNode = function (head) {
  let arr = [head];
  while (arr[arr.length - 1].next != null) arr.push(arr[arr.length - 1].next);
  return arr[Math.trunc(arr.length / 2)];
};

const head = [1, 2, 3, 4, 5];
middleNode(head);

/*
    2. Approach: Fast and Slow Pointer
        1. travarse the list using 2 pointers, slow and fast.
        fast traverse twice as fast

    Time complexity: O(N)
    Space Complexity: O(1)
 */

var middleNode2 = function (head) {
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
