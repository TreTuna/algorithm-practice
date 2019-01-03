// Rock Paper Permutation
// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.


function rockPaperPermutation (roundCount) {
  // create a results array
  var results = [];
  // set out outcome options
  var options = ['r', 'p', 's'];
  // if 0 rounds, return empty array
  if(roundCount === 0){
    return results;
  }
  //recursive function to calculate outcome of rounds
  var runRounds = function(roundCount, roundResults){
    // recursive base case, once rounds === 0 we break the recursion
    if(roundCount === 0){
      // join the roundResults array together and push to results
      results.push(roundResults.join(''));
      return;
    } else {
      // for loop to go over adding each option
      for(var i = 0; i < options.length; i++){
        var playThis = options[i];
        // recursion call to add each option for the amount of rounds, concatenating results
        runRounds(roundCount - 1, roundResults.concat(playThis));
      }
    }
  };

  // Begin recursion
  runRounds(roundCount, []);

  return results;
}