function robotPaths (n) {
  // Write your code here, and
  // return your final answer.
}



// ***** Solution Code
//



var robotPaths = function(n, board, i, j) {
// Initialize these if not provided
if (!board) {
  board = makeBoard(n);
  i = 0;
  j = 0;
}
// No possible paths if you’re off the board
// or on a piece you shouldn’t be on
if (!(i >= 0 && i < n && j >= 0 && j < n) ||
  board.hasBeenVisited(i, j)) {
  return 0;
}
// One possible path if you’re at the
// end point (the path that led there)
if (i === n-1 && j === n-1) return 1;
board.togglePiece(i, j);
var result = robotPaths(n, board, i, j+1) +
  robotPaths(n, board, i, j-1) +
  robotPaths(n, board, i+1, j) +
  robotPaths(n, board, i-1, j);
// Return the board to its original state
board.togglePiece(i, j);
return result;
};