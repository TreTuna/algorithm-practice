commonCharacters = function(string1, string2){
  if(string1 === '' || string2 === ''){
    return '';
  }

  var results = [];

  for(var i = 0; i < string1.length; i++){
    var currentChar = string1[i]
    if(string2.includes(currentChar) && !results.includes(currentChar) && currentChar !== ' '){
      results.push(currentChar);
    }
  }

  return results.join('');
};


// ******* Solution Code
// always be mindful of starting value for reduce
var commonCharacters = function(str1, str2) {
  var common = intersection(objectify(str1), objectify(str2));
  return str1.split('').reduce(function(result, char){
    if (common[char]) { result += char; }
	return result;
  }, '');
};

var intersection = function (set1, set2) {
  return Object.keys(set1).reduce(
    function (out, val) {
      if (val in set2) { out[val] = true; }
      return out;
    },
  {});
};

// for more information about match and regex check out MDN
// alternatively googling regex gives you lots of useful refs
var objectify = function (str) {
   return str.split('').reduce(function (obj, char) {
     if (char.match(/[a-z]/i)) { obj[char] = true; }
     return obj;
   }, {});
};
