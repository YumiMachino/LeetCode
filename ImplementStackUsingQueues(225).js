/*
https://leetcode.com/problems/implement-stack-using-queues/
LeetCode #225 Implement Stack using Queues (EASY)
Run with : node ImplementStackUsingQueues.js
 */

class MyStack {
  constructor() {
    this.s = [];
  }

  /**
   * Push element x onto stack.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.s.push(x);
  }

  /**
   * Removes the element on top of the stack and returns that element.
   * @return {number}
   */
  pop() {
    return this.s.pop();
  }

  /**
   * Get the top element.
   * @return {number}
   */
  top() {
    if (this.s.length != 0) {
      return this.s[this.s.length - 1];
    } else {
      return null;
    }
  }
  /**
   * Returns whether the stack is empty.
   * @return {boolean}
   */
  empty() {
    return this.s.length === 0;
  }
}
