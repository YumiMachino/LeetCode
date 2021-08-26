/*
https://leetcode.com/problems/merge-in-between-linked-lists/
LeetCode #1669 Merge In Between Linked Lists (MEDIUM)
Run with : node MergeInBetweenLinkedList.js
 */

/*
1. Approach
    1. Create pointer variables(current, next, index), Loop through list1 using while loop,
        if pointer index indicates a, it skips till index b(holds the node with index b in different variable),
        then loop through list 2 using while loop, and then pointer indicates null at the end, insert the nodes with b
    2. then return the node

    Time Complexity: O(N + M)  N= number of nodes in list1, M = of list2
    Space Complexity: O(1)    -> always require same number of pointer variables

 */

var mergeInBetween = function (list1, a, b, list2) {
  let curr = list1,
    next = null,
    i = 1;

  while (curr) {
    next = curr.next;
    if (i === a) {
      while (next != null && i !== b) {
        next = next.next;
        i++;
      }
      let nextInList = next.next;
      let list2curr = list2;
      while (list2curr != null) {
        curr.next = list2curr;
        curr = curr.next;
        list2curr = list2curr.next;
      }
      curr.next = nextInList;
      return list1;
    } else {
      curr = curr.next;
      i++;
    }
  }

  return curr;
};
