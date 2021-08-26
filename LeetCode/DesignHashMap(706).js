/*
https://leetcode.com/problems/design-hashmap/
LeetCode #706 Design HashMap (EASY)
Run with : node DesignHashMap.js
 */

/**
 * Initialize your data structure here.
 */
// var MyHashMap = function () {
//   this.size = 19997;
//   this.mult = 12582917;
//   this.data = new Array(this.size);
// };

// /**
//  * value will always be non-negative.
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// MyHashMap.prototype.put = function (key, value) {
//   this.remove(key);
//   let h = this.hash(key);
//   let node = new ListNode(key, val, this.data[h]);
//   this.data[h] = node;
// };

// /**
//  * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
//  * @param {number} key
//  * @return {number}
//  */
// MyHashMap.prototype.get = function (key) {
//   let h = this.hash(key);
//   let node = this.data[h];
//   while (node.next != null) {
//     node = node.next;
//     if (node.key === key) {
//       return node.val;
//     }
//   }
//   return -1;
// };

// /**
//  * Removes the mapping of the specified value key if this map contains a mapping for the key
//  * @param {number} key
//  * @return {void}
//  */
// MyHashMap.prototype.remove = function (key) {
//   let h = this.hash(key);
//   let node = this.data[h];
//   if (!node) return;
//   if (node.key === key) {
//     this.data[h] = node.next;
//   } else {
//     while (node.next) {
//       node = node.next;
//       if (node.next.key === key) {
//         node.next = node.next.next;
//         return;
//       }
//     }
//   }
// };

// MyHashMap.prototype.hash = function (key) {
//   return (key * this.mult) % this.size;
// };

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// BASIC: Hashmap using array
class MyHashMap {
  constructor() {
    this.data = new Array(10000001);
  }
  put(key, val) {
    this.data[key] = val;
  }
  get(key) {
    let val = this.data[key];
    return val !== undefined ? val : -1;
  }
  // delete removes a property from an object
  remove(key) {
    delete this.data[key];
  }
}

//Hashmap using Hash
class ListNode {
  constructor(key, val, next) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

class MyHashMap {
  constructor() {
    this.size = 19997;
    this.mult = 12582917;
    this.data = new Array(this.size);
  }
  hash(key) {
    return (key * this.mult) % this.size;
  }
  put(key, val) {
    this.remove(key);
    let h = this.hash(key);
    let node = new ListNode(key, val, this.data[h]);
    this.data[h] = node;
  }
  get(key) {
    let h = this.hash(key),
      node = this.data[h];
    for (; node; node = node.next) if (node.key === key) return node.val;
    return -1;
  }
  remove(key) {
    let h = this.hash(key),
      node = this.data[h];
    if (!node) return;
    if (node.key === key) {
      this.data[h] = node.next;
    } else
      for (; node.next; node = node.next) {
        if (node.next.key === key) {
          node.next = node.next.next;
          return;
        }
      }
  }
}
