Finish this implementation of a Hash Table. It should have the methods insert(), retrieve(), and remove(). Your hash table need not resize itself, but shall handle collisions.

Given Code:

let makeHashTable = function(){
  let table = {};
  let storage = [];
  let storageLimit = 1000;

  table.insert = function(key, value){
    let index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    //YOUR CODE HERE
  };

  table.retrieve = function(key){
    //YOUR CODE HERE
  };

  table.remove = function(key){
    //YOUR CODE HERE
  }
  return table;
};
let getIndexBelowMaxForKey = function(str, max){
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};