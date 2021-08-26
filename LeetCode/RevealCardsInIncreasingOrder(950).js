/*
https://leetcode.com/problems/reveal-cards-in-increasing-order/
LeetCode #950 Reveal Cards In Increasing Order (MEDIUM)
Run with : node RevealCardsInIncreasingOrder.js
 */

const deckRevealedIncreasing = (deck) => {
  deck.sort((a, b) => a - b);
  const ans = [];
  while (deck.length) {
    ans.unshift(deck.pop());
    ans.unshift(ans.pop());
  }
  ans.push(ans.shift());
  return ans;
};

// Test
const deck = [17, 13, 11, 2, 3, 5, 7];
deckRevealedIncreasing(deck);
