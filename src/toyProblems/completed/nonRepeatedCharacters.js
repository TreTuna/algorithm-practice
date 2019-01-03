// Non-repeated Character
// Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.

function firstNonRepeatedCharacter (string) {
  for(var i = 0; i < string.length; i++){
    var char = string[i];
    var count = 0;
    for(var j = 0; j < string.length; j++){
      if(i !== j){
        if(string[i] === string[j]){
          count++;
        }
      }
    }
    if (count === 0) return string[i];
  }
  return 'sorry';
}

// ***** Solution Code

var firstNonRepeatedCharacter= function(string) {
  var chars = {};
  var c;

  for(var i = 0; i < string.length; i++){
	// be mindful at this may not work for older browsers
    c = string[i];
    if(!chars[c]){
      chars[c] = 1;
    } else {
      chars[c]++;
    }
  }

  // notice var is not used here
  for(i = 0; i < string.length; i++){
    c = string[i];
    if(chars[c] === 1) {
      return c;
    }
  }

  // didn't find any char that only showed up once
  return ‘sorry’;
}
