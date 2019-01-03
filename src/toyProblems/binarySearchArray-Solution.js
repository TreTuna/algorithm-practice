function binarySearch (array, target) {
  let targetIndex = -1;
  let workingMidpoint = Math.floor(array.length / 2);

  if(target === array[workingMidpoint]){
    return workingMidpoint;
  }

  let subRt = function(array, workingMidpoint) {
    if(target === array[workingMidpoint]) {
      return targetIndex = workingMidpoint;
    } else if ( target > array[workingMidpoint]) {
      workingMidpoint = workingMidpoint + Math.floor(((array.length - workingMidpoint) / 2));
      subRt(array, workingMidpoint);
    } else if ( target < array[workingMidpoint]) {
      workingMidpoint = Math.floor((array.length - workingMidpoint) / 2);
      subRt(array, workingMidpoint);
    }
  }

  subRt(array, workingMidpoint);
  return targetIndex;
};


// ***** Solution Code

var binarySearch = function (array, target) {
  var sub = function (low, high) {
    var mid = Math.floor((high - low) / 2) + low;
    if (array[mid] === target) {
      return mid;
    } else if (high === low) { // we've gone through and haven't found it
      return -1;
    } else if (array[mid] > target) {
      return sub(low, mid);
    } else if (low === mid) { //notice this edge case - what is it saying?
      return sub(mid + 1, high);
    } else {
      return sub(mid, high);
    }
  };

  return sub(0, array.length - 1);
};

// Time complexity if O(log(n))
// What happens if you slice?
// Complexity is usually stated in upperbounds, so in a nutshell we could say it is O(nlog(n))
// Why? Consider what the limit of n + n/2 + n/4 ... is (This is not same as complexity for binary search)
// (https://en.wikipedia.org/wiki/Geometric_series)
// However to narrow down further suggest looking into Master's Theorem (but that is beyond scope at this time)