var sumArray = array => {
  var current = 0;
  var sum = Number.NEGATIVE_INFINITY;

  for (var i = 0; i < array.length; i++) {
    current += array[i];
    sum = Math.max(sum, current)
    if(current < 0) {
      current = 0
    }
  }

  return sum;
};



// Kadanes algorithm
// http://stackoverflow.com/questions/32367032/kadanes-algorithm-explained






// solution code

var sumArray = function(array) {
  var maxSum = Number.NEGATIVE_INFINITY;
  var currentSum = 0;

  // O(n^2) solution
  for ( var start = 0; start < array.length; start++ ){
    currentSum = 0;
    for ( var end = start; end < array.length; end++ ){
      currentSum += array[end];
      if ( currentSum > maxSum ){
        maxSum = currentSum;
      }
    }
  }

  // O(n) solution
  for(var i = 0; i < array.length; i++) {
    // Add the new number to the current sum
    currentSum += array[i];
    // Record as the largest sum if necessary
    maxSum = Math.max(maxSum, currentSum);
    // If negative, throw out earlier progress
    // and consider intervals starting at this point
    if(currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSum;
};