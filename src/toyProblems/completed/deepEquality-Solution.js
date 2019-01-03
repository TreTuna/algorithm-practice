deepEquals = function(a, b) {
  if(a === b) {return true;}
  if(a === undefined || b === undefined) {return false;}
  if(Array.isArray(a) && !Array.isArray(b)){return false;}
  if(Array.isArray(b) && !Array.isArray(a)){return false;}
  if(Object.keys(a).length !== Object.keys(b).length) {return false;}
  for(key in a){
    if(!deepEquals(a[key], b[key])) {return false;}
  }
  return true;
}





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