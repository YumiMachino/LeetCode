/*
https://leetcode.com/problems/design-browser-history/
LeetCode #1472 Design Browser History (MEDIUM)
Run with : node DesignBrowserHistory.js
 */

/**
 * @param {string} homepage
 */
class BrowserHistory {
  constructor(homepage) {
    this.curr = 1;
    this.history = [homepage];
  }

  /**
   *
   * @param {string} url
   * @returns {void}
   */
  visit(url) {
    if (this.curr != this.history.length) {
      this.history = this.history.slice(0, this.curr);
    }
    this.curr++;
    this.history.push(url);
  }

  /**
   *
   * @param {int} steps
   * @returns {string}
   */
  back(steps) {
    if (this.curr - steps - 1 < 0) {
      this.curr = 1;
    } else {
      this.curr = this.curr - steps;
    }
    return this.history[this.curr - 1];
  }

  /**
   *
   * @param {int} steps
   * @returns {string}
   */
  forward(steps) {
    if (this.curr + steps > this.history.length) {
      this.curr = this.history.length;
    } else {
      this.curr = this.curr + steps;
    }
    return this.history[this.curr - 1];
  }
}

// Test
var browser = new BrowserHistory("leetcode.com");
browser.visit("google.com");
browser.visit("facebook.com");
browser.visit("youtube.com");
browser.back(1);
browser.back(1);
browser.forward(3);
console.log(browser);
