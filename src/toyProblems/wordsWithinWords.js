// Words within Words
// Given an array of unique words, find the word that contains the greatest number of other words. A word must be at least two letters long.
//
//   Examples
// Input	Output
// wordList:
//   [ "gray", "grays", "ray", "rays", "strays" ]	"grays"

const nestedWordCount = (wordList) => {
  let maxWords = 0;
  let currentWords = 0;

  for(let i = 0; i < wordList.length; i++) {
    for(let j = 0; j < wordList.length; i++) {
      if(i !== j){
        if(wordList[i].includes(wordList[j])) {
          currentWords++;
        }
      }
    }
    if(currentWords > maxWords) {
      maxWords = currentWords;
    }
  }
  return maxWords;
};


// *** Solution Code

function nestedWordCount(wordList) {
  var result = '';      // create empty result variable
  var highest = 0;      // create variable to store current highest count

  wordList.forEach(function(word) {       // loop through wordList
    var count = 0;                 // create an inner count variable
    wordList.forEach(function(word2) {    // loop through wordList a second time
      if (word.toLowerCase().includes(word2.toLowerCase())) {
        count++;		// if first word contains second, increase counter
      }
    });			 	// after inner loop, check count against current highest
    if (count > highest) {  	// if count is greater than highest
      highest = count; 				// set highest to count
      result = word;				// set result to word
    }
  });
  return result;
}