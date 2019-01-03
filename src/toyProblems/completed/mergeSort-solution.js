const mergeSort = (arr) => {
  // return any arrays with less than 2 items as they are already sorted
  if(array.length < 2) { return array; }

  // find midpoint an create separate arrays for each side
  let midPoint = Math.floor(arr.length / 2);
  let firstHalf = array.slice(0, midPoint);
  let secondHalf = array.slice(midPoint);

  // recursivelly sort both halves and use merge helper function to combine again - return result
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
};

// create merge function for two sorted arrays
var merge = (arr1, arr2) => {
  // create results array
  let results = [];
  // create index counters for both arrays
  let i = 0, j = 0;

  // use while loop to check if the counters have reached the lengths of the arrays
  while (i < arr1.length && j < arr2.length) {
    // use index counters to check if the numbers at that counter in the respective arrays is smaller or larger
    if(arr1[i] < arr2[j]) {
      // push the smaller of the two too the results array and increment the counter for the one that was pushed
      results.push(arr1[i++]);
    } else {
      results.push(arr2[j++]);
    }
  }
  // check if
// either array has remaining numbers, if so, concatenate to results
  var remaining = i === arr1.length ? arr2.slice(j) : arr1.slice(i);
  return results.concat(remaining);
};


// ***** Recursive Solution

var mergeSort = function(array) {
  // Arrays that are [] or [x] are already sorted, so we can just return them.
  if (array.length <= 1) { return array; }

  // Split the array into two halves.
  var half = Math.floor(array.length / 2);
  var left = array.slice(0, half);
  var right = array.slice(half);

  // Sort both halves, then merge them together.
  return merge(mergeSort(left), mergeSort(right));
};


var merge = function (left, right) { // pass in an array of two sorted arrays
  var i = 0, j = 0, result = []; // initialize our counters
  // While there is something left in both arrays to push to `result`...
  while (i < left.length && j < right.length) {
    // ...push the smaller of the two
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  // One array is already pushed to result,
  // so add the rest of the other array
  var remaining = i === left.length ? right.slice(j) : left.slice(i);
  return result.concat(remaining);
};

// iterative solution

const mergeSort = arr => {
  let split = arr.map(num => [num]);
  let temp = []
  while (split[0].length < arr.length) {
    for (var i = 0; i < split.length; i += 2) {
      split[i+1] ? temp.push(zip(split[i], split[i+1])) : temp.push(split[i])
    }
    split = temp;
    temp = [];
  }
  return split[0]
}

const zip = (arr1, arr2, merged = []) => {
  let i1 = 0;
  let i2 = 0;
  while (arr1[i1] !== undefined && arr2[i2] !== undefined) {
    if (arr1[i1] < arr2[i2]) {
      merged.push(arr1[i1]);
      i1++;
    } else {
      merged.push(arr2[i2]);
      i2++;
    }
  }
  return arr1[i1] ? [...merged, ...arr1.slice(i1)] : [...merged, ...arr2.slice(i2)];
}