/*All Anagrams
Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

  Parameters:

  string (required) - a string of characters.

  Examples
Input	Output
string:
  "abc"	[ "abc", "acb", "bac", "bca", "cab", "cba" ]*/

function allAnagrams (string) {
  // Write your code here, and
  // return your final answer.
}


// *** Solution Code

// first solution
allAnagrams = function(string) {
  // store as object to deal with duplicates
  var anagrams = {};

  // sub routine
  var generator = function(text, options){
    if (text.length === string.length){
      anagrams[text] = true
    }
    for (var i = 0; i < options.length; i++){
      generator(text + options[i],
        options.slice(0, i) + options.slice(i+1))
    }
  }

  // invoke subroutine
  generator(‘’, string);

  // return keys from object
  return Object.keys(anagrams);
}

// self referencing solution
var allAnagrams = function(string) {
  // this is our base case, return array with empty string
  if (string.length === 0) { return [‘’]; }

  var result = {};
  // for each letter in string
  // string.split let's us use forEach later on, can't use forEach on a string
  // however split('') does not mutate string
  string.split('').forEach(function(letter, i) {
    // remainingLetters remains a string
    var remainingLetters = string.slice(0, i) + string.slice(i + 1);
    // allAnagrms(remainingLetters) returns all possible anagrams from remaining letters
    // for each anagram of the remaining letters
    allAnagrams(remainingLetters).forEach(function(anagram) {
      // letter + anagram is combination of current letter plus all possible anagrams with remainging letters
      result[letter + anagram] = true;
    });
  });

  // we are returning an array
  return Object.keys(result);
};