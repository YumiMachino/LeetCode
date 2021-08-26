/*
https://leetcode.com/problems/reverse-linked-list/
LeetCode #206 Reverse Linked List (EASY)
Run with : node ReverseLinkedList.js
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*
1. Approach (iteratively)
    1. create var to store previous node and current head node  -> O(1)
    2. iterate until current head node is null          -> O(N)

    Time Complexity: O(N)
    Space Complexity: O(1)
 */

/*
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
