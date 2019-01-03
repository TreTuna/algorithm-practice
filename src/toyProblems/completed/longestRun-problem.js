Longest Run
Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run.
  If there are two runs of equal length, return the first one. Return [0,0] for no runs.

  Examples
Input	Output
string:
  "abbbcc"	[ 1, 3 ]
string:
  "aabbc"	[ 0, 1 ]
string:
  ""	[ 0, 0 ]
string:
  "mississippi"	[ 2, 3 ]
string:
  "abcdefgh"	[ 0, 0 ]
string:
  "abccccccc"	[ 2, 8 ]


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