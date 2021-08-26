/*
create a hash table class
reference: https://www.educative.io/blog/data-strucutres-hash-table-javascript
 */

// class HashTable {
//   constructor() {
//     this.values = {};
//     this.length = 0;
//     this.size = 0;
//   }

//   calculateHash(key) {
//     return key.toString().length % this.size;
//   }
//   add(key, value) {
//     // calculate hash for key
//     const hash = this.calculateHash(key);
//     // check if the hash exist
//     if (!this.values.hasOwnProperty(hash)) {
//       this.values[hash] = {};
//     }
//     if (!this.values[hash].hasOwnProperty(key)) {
//       this.length++;
//     }
//     this.values[hash][key] = value;
//   }

//   search(key) {
//     const hash = this.calculateHash(key);
//     if (
//       this.values.hasOwnProperty(hash) &&
//       this.values[hash].hasOwnProperty(key)
//     ) {
//       return this.values[hash][key];
//     } else {
//       return null;
//     }
//   }
// }

// const hTable = new HashTable();
// // add data to the hash table
// hTable.add("Canada", "300");
// console.log(hTable);
// hTable.add("Germany", "100");
// hTable.add("Italy", "50");

// console.log(hTable.search("Italy"));
// console.log(hTable);

// Linked list
class HashEntry {
  constructor(key, data) {
    this.key = key;
    // data to be stored
    this.value = data;
    // reference to new entry
    this.next = null;
  }
}

class HashTable {
  constructor() {
    // size of the hash table
    this.slots = 10;
    // current entries in the table
    // used while resizing the table when half of the table gets filled
    this.size = 0;
    // array of HashEntry objects
    this.bucket = [];
    for (let i = 0; i < this.slots; i++) {
      this.bucket[i] = null;
    }
  }
  get_size() {
    return this.size;
  }

  isEmpty() {
    return this.get_size() == 0;
  }

  getIndex(key) {
    let index = key.toString().length % this.slots;
    return index;
  }

  add(hashEntry) {
    // calculate hash for the key
    const hash = this.getIndex(hashEntry.key);
    console.log(hash);
    //if there is same hash key value in bucket
    if (this.bucket[hash] != null) {
      while (this.bucket[hash] != null) {
        continue;
      }
      this.bucket[hash].next = hashEntry;
    } else {
      this.bucket[hash] = hashEntry.value;
    }
    this.size++;
  }
}

// Test
let entry = new HashEntry("Canada", "Educative");
let entry2 = new HashEntry("Aus", "assdadsa");
console.log(String(entry.key), ",  " + entry.value);
let ht = new HashTable();
console.log(ht);
console.log(ht.add(entry));
ht.add(entry2);
console.log(ht);
console.log(ht.isEmpty());

/*
    Hash tables made up of 2 parts:
        - Object: holds all the key-value entries 
        - Hash function: a function to determine the index of key-value pair
    
    Hash function:
        - a function to takes item key as an input, assign specic index to that key 
        and return the index whenever is looked up.

        ** Key -> Hash function -> Index
        common hash functions (there are other ways)
        -> Arithmetic Modular: index = key MOD tableSize (index always stays between 0 and tableSize - 1)
        -> sometimes, same index could be generated
         => **Hash Collisions
            => **Chaining (Linked list)



    
 */
