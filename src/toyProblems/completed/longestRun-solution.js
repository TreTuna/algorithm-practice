function longestRun (string) {
  var results = [0, 0];
  var currentRun = [0, 0];

  var checkRunner = function() {
    if (currentRun[1] - currentRun[0] > results[1] - results[0]) {
      results[0] = currentRun[0];
      results[1] = currentRun[1];
    }
    if (results[1] - results[0] === 0) {
      results = [0, 0];
    }
  };

  for(var i = 1; i < string.length; i++) {
    var char = string[i];
    var prevChar = string[(i - 1)];
    if (char === prevChar) {
      currentRun[1] = i;
    } else {
      checkRunner();
      currentRun = [i, i];
    };
  }
  checkRunner();
  return results;
}


// *** Solution Code

var longestRun = function(string) {
  var max = [0, 0];
  var current = [0, 0];
  // Note we start at index 1 (second letter of string)
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === string[i]) {
      current[1] = i;
      if (current[1] - current[0] > max[1] - max[0]) {
        max = current;
      }
    } else {
      current = [i, i];
    }
  }
  return max;
};