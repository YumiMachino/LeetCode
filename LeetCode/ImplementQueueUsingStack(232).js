/*
https://leetcode.com/problems/implement-queue-using-stacks/
LeetCode #232 Implement Queue using Stacks (EASY)
Run with : node ImplementQueueUsingStack.js
 */

class MyQueue {
  constructor() {
    this.q = [];
  }

  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.q.push(x);
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    if (this.q.length != 0) {
      return this.q.shift();
    } else {
      return null;
    }
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    if (this.q.length != 0) {
      return this.q[0];
    } else {
      return null;
    }
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return this.q.length === 0;
  }
}

let q = new MyQueue();
