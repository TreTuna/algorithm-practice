var makeHashTable = function(){
  var table = {};
  var storage = [];
  var storageLimit = 1000;


  table.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];

    for(let i = 0; i < storage[index].length; i++) {
      var tuple = storage[index][i];
      if (tuple[0] === key) {
        var oldValue = tuple[1];
        tuple[1] = value;
        return oldValue;
      }
    }
    storage[index].push([key, value]);
  };

  table.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if(storage[index]) {
      for(let i = 0; i < storage[index].length; i++) {
        var tuple = storage[index][i];
        if (tuple[0] === key) {
          return tuple[1];
        }
      }
    }
  };

  table.remove = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if(storage[index]) {
      for(let i = 0; i < storage[index].length; i++) {
        var tuple = storage[index][i];
        if(tuple[0] === key) {
          var removed = storage[index].splice(i, 1);
          return removed;
        }
      }
    }
  };
  return table;
};





var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};





// **** Solution Code


// Utilizes arrays for collision handling
var makeHashTable = function(){
  // Functional instatiation pattern
  var table = {};
  var storage = [];
  var storageLimit = 1000;


  table.insert = function(key, value){
    // Hash key to get index for storage
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // Initialize empty array if it doesn't exist
    storage[index] = storage[index] || [];
    // Loop through to see if key already exists
    for (let tuple of storage[index]) {
      if (tuple[0] === key) {
        // If key exists, set it to the new value
        tuple[1] = value;
        return;
      }
    }
    // If we didn't do a replace, we add the new
    // pair to the storage bucket / array
    storage[index].push([key, value]);
  };


  table.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index]) {
      for (let tuple of storage[index]) {
        if (tuple[0] === key) {
          return tuple[1];
        }
      }
    }
  };


  table.remove = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index]) {
      for(let tuple of storage[index]) {
        if (tuple[0] === key) {
          var removed = storage[index].splice(i, 1);
          return removed[1]
        }
      }
    }
  }
  return table;
};
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};


// **** Solution Code

// Utilizes arrays for collision handling
var makeHashTable = function(){
  // Functional instatiation pattern
  var table = {};
  var storage = [];
  var storageLimit = 1000;


  table.insert = function(key, value){
    // Hash key to get index for storage
    var index = getIndexBelowMaxForKey(key, storageLimit);
    // Initialize empty array if it doesn't exist
    storage[index] = storage[index] || [];
    // Loop through to see if key already exists
    for (let tuple of storage[index]) {
      if (tuple[0] === key) {
        // If key exists, set it to the new value
        tuple[1] = value;
        return;
      }
    }
    // If we didn't do a replace, we add the new
    // pair to the storage bucket / array
    storage[index].push([key, value]);
  };


  table.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index]) {
      for (let tuple of storage[index]) {
        if (tuple[0] === key) {
          return tuple[1];
        }
      }
    }
  };


  table.remove = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index]) {
      for(let tuple of storage[index]) {
        if (tuple[0] === key) {
          var removed = storage[index].splice(i, 1);
          return removed[1]
        }
      }
    }
  }
  return table;
};
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }