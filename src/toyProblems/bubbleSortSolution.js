var bubbleSort = function(array) {
  var runCount = array.length;
  while(runCount > 0){
    for(var i = 0; i < array.length; i++){
      if (array[i] > array[i + 1]){
        array[i] = array.splice((i+1), 1, array[i])[0];
      }
    }
    runCount--;
  }
  return array;
};

// ******* Solution Code

// bubble sort is a great intro to sorting algorithms, strongly suggest looking into other sorting algorithms as an exercise
var bubbleSort = function (array) {
  var len = array.length;

  // make sure to understand how this while loop runs and how we break out of it
  while (true) {
    var swaps = false;

    for (var i = 0; i < len - 1; i++) {
      if (array[i] > array[i + 1]) {
         swaps = true;
         swap(i, i + 1, array);
      }
    }

    if (!swaps) { break; }
  }

  return array;
};

// swap function
var swap = function (i, j, array) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  return array;
};

// or bitwise swap
var swap = function (i, j, array) {
  array[i] ^= array[j];
  array[j] ^= array[i];
  array[i] ^= array[j];
  return array;
};
