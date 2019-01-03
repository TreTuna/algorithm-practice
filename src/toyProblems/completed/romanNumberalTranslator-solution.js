function translateRomanNumeral (romanNumeral) {
  var result = 0;

  for(var i = 0; i < romanNumeral.length; i++) {
    if(!DIGIT_VALUES[romanNumeral[i]]) {
      return "null";
    }
    var curNum = DIGIT_VALUES[romanNumeral[i]];
    var nextNum = DIGIT_VALUES[romanNumeral[i + 1]];
    if (curNum < nextNum) {
      result -= curNum;
    } else {
      result += curNum;
    }
  }
  return result;
}



// **** Solution COde


var translateRomanNumeral(romanNumeral) {
  var total = 0;
  for (var i = 0; i < romanNumeral.length; i++) {
    // why do we use romanNumeral.charAt(i)?
    var currentValue = DIGIT_VALUES[romanNumeral.charAt(i)];
    var nextValue = DIGIT_VALUES[romanNumeral.charAt(i+1)];

    // don't forget the edge case checks
    if (currentValue < nextValue){
      total -= currentValue;
    } else {
      total += currentValue;
    }
  }
  return total;
};

// this is a helper function
var DIGIT_VALUES = { … };
