




// ****** Solution Code

deepEquals = function(a, b) {
  if(a === b) {return true;}
  if(!a || !b) {return false;}
  if(!(a instanceof Object) || !(b instanceof Object)) {return false;}
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if(aKeys.length !== bKeys.length) {return false;}
  if(aKeys.length === 0) {return true;}
  for(var key in a){
      if(!deepEquals(a[key], b[key])) {return false;}
  }
  return true;
};

add stringifyJSON and .isArray compare