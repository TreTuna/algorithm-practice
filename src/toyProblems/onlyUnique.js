/*
Only Unique
Given a string, remove any characters that are not unique from the string.

  Examples
Input	Output
str:
  "abccdefe"	"abdf"
str:
  "hello there"	"o tr"
str:
  "xyz"	"xyz"
str:
  "iiii"	""
*/


function onlyUnique (str) {
  // Write your code here, and
  // return your final answer.
}




// *** Solution Code

function onlyUnique (str) {
  var characters = str.split('');
  // Storing character counts in an object for
  // constant time lookup
  var counts = {};
  var solution = '';
  // Create counts for each letter in the string
  characters.forEach(function(letter) {
    if (counts[letter]) {
      counts[letter] = counts[letter] + 1;
    } else {
      counts[letter] = 1;
    }
  });
  // Add letters to the solution string if
  // they have a count of 1
  characters.forEach(function(letter) {
    if(counts[letter] === 1) {
      solution += letter;
    }
  });
  return solution;
}

// Using some regex, for funs
function onlyUnique (str) {
  let uniqueStr = str;
  for (var i = 0; i < str.length; i++) {
    let letter = str[i];
    // create a regex to match chars that occur twice, and
    // that stops searching once it finds the second occurence
    let re = new RegExp(`^(.*?[${letter}]){2}`)
    // .match will return null if the character does not repeat
    if (uniqueStr.match(re)) {
      // replace all instances of that letter in the string
      uniqueStr = uniqueStr.replace(new RegExp(letter, ‘g’), ‘’)
    }
  }
  return uniqueStr;
}