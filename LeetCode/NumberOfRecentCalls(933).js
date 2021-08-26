/*
https://leetcode.com/problems/number-of-recent-calls/
LeetCode #933 Number of Recent Calls (EASY)
Run with : node NumberOfRecentCalls.js
 */

class RecentCounter {
  constructor() {
    this.request = [];
  }

  /**
   * @param {number} t
   * @return {number}
   */
  ping(t) {
    this.request.push(t);
    let initValue = t - 3000;
    let count = 0;

    for (let i = 0; i <= this.request.length; i++) {
      if (initValue <= this.request[i]) {
        count++;
      }
    }
    return count;
  }
}

const recentCounter = new RecentCounter();
recentCounter.ping(1);
recentCounter.ping(100);
recentCounter.ping(3001);
recentCounter.ping(3002);

// different ver
var RecentCounterRev = function () {
  this.request = [];
};

RecentCounterRev.prototype.ping = function (t) {
  this.request.push(t);

  while (this.request[0] < t - 3000) this.request.shift();

  return this.request.length;
};
