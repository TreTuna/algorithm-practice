function insertionSort (array) {
  for(let i = 1; i < array.length; i++){
    if(array[i].value < array[i - 1]){
      array.splice((i-1), 0, array.splice(array[i], 1));
    }
  }
};


// *** Insertion Sort

var insertionSort = function(array) {
  for (var ix = 1; ix < array.length; ix++) {
    // Assume that array.slice(0, ix) is sorted.

    // Grab the current element
    var val = array[ix];
    var hole = ix;

    // Find the insertion point
    // for insertion sort this is what makes it stable
    // javascript does not require a browser implementation of sort be stable
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
    while (hole && val < array[hole - 1]) {
      array[hole] = array[hole - 1];
      hole -= 1;
    }

    // Insert the element
    array[hole] = val;
    /* At this point, `val` has been inserted,
     * and array.slice(0, ix + 1) is now sorted.*/
  }

  return array;
};

// what is the time complexity?
