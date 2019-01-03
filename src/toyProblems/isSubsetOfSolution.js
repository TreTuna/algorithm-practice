// Is Subset Of
// Make an array method that can return whether or not a context array is a
// subset of an input array. To simplify the problem, you can assume that both
// arrays will contain only strings.

Array.prototype.isSubsetOf = function(searchArray) {
  var result = true;
  for(var i = 0; i < this.length; i++){
    var search = this[i];
    if(!searchArray.includes(search)){
      result = false;
    }
  }
  return result;
};


/// ******* Solution Code


Array.prototype.isSubsetOf = function(arr) {
  return isSubsetObjs(objectify(this), objectify(arr));
};

var isSubsetObjs = function(obj1, obj2) {
  for (var key in obj1) {
	// we need to test for false because we don't want to return true prematurely
    if (!obj2.hasOwnProperty(key)) {
     return false;
    }
  }
  return true; // this is outside of for loop
};

var objectify = function(arr) {
  return arr.reduce(function (out, item) {
    out[item] = true;
    return out;
  }, {}); //consider why you need to use an empty object as the starting value
};
