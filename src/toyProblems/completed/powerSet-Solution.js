powerSet = str => {

  const subRt = str => {
    // Base case of empty str
    if(str === '') return [''];

    let firstChar = str[0];
    let otherChars = str.slice(1);

    // create powerset ariable for rest of the str here so you don't have to calculate twice int the return statement
    let psRest = subRt(otherChars);

    return psRest.concat(psRest.map(prepend(firstChar)));
  };

  return subRt(removeDups(str)).sort();
};

const prepend = char => str => sortString(char.concat(str));

const sortString = str => str.split('').sort().join('');

const removeDups = str => {
  const chars = {};
  let result = '';
  for(var i = 0; i < str.length; i++){
    if(!chars[str[i]]){
      chars[str[i]] = true;
      result += str[i];
    };
  }
  return result;
};






































// ***** Solution Code

// Note: in addition to removing duplicate
// characters, the challenge app also asked
// you to sort the subsets, as well as
// the characters in each subset
var actualSolution = function(str) {
  return powerSet(removeDuplicates(str));
};

var powerSet = function(str) {
  // Base case: The one subset of the empty
  // set is the empty set.
  if (str === '') return [''];

  var first = str[0];
  var rest = str.slice(1);

  // Avoid computing this twice by storing it in a variable!
  var psRest = powerSet(rest);

  return psRest
    .concat(psRest.map(prepend(first)));
};

// Helper functions for prepending characters to
// and removing duplicates from a string
var prepend = function(char) {
  return function(str) {
    return char.concat(str);
  };
};
var removeDuplicates = function(str) {
  var alreadySeen = {};
  var result = '';
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (!alreadySeen[char]) {
      result += char;
      alreadySeen[char] = true;
    }
  }
  return result;
};

