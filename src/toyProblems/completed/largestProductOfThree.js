// ****** Solution Code

deepEquals = function(a, b) {
    if (a === b) { return true; }
    if (!a || !b) { return false; }
    if (!(a instanceof Object) || !(b instanceof Object)) { return false; }
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) { return false; }
    if (aKeys.length === 0) { return true; }
    for (var key in a) {
        if (!deepEquals(a[key], b[key])) { return false; }
    }
    return true;
};

add stringifyJSON and.isArray compare
    if(min1 === undefined || array[i] < min1) {
      min2 = min1;
      min1 = array[i];
    }else if(min2 === undefined || array[i] < min2) {
      min2 = array[i];
    }
  }
  if(min1 === undefined) {
    min1 = 1;
  }
  if(min2 === undefined) {
    min2 = 1;
  }

  let result1 = max1 * max2 * max3;
  let result2 = max1 * min1 * min2;

return result1 > result2 ? result1 : result2;
}


// ****** Solution Code

let largestProduct = function(array) {
  // shallow vs deep copy (mostly first section for example on difference in JS)
  // https://www.webreflection.co.uk/blog/2015/10/06/how-to-copy-objects-in-javascript
  // detail explanation on the concept
  // http://stackoverflow.com/questions/184710/what-is-the-difference-between-a-deep-copy-and-a-shallow-copy
  array = array.slice().sort(sortAscending);
  let n = array.length;

  let lastProduct =
    array[n-1] * array[n-2] * array[n-3];
  let firstProduct =
    array[n-1] * array[0] * array[1];

  return Math.max(firstProduct, lastProduct);
};

// information on sort from mdn
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
let sortAscending = function(a, b) {
   return a - b;
};
