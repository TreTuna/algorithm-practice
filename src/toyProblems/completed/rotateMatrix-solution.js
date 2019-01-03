const rotateMatrix = (matrix, direction = 1) => {
  // create a resulting matrix
  const resultMatrix = [];
  // create variables for the extent of the original matrix lengths
  let m = matrix.length, n = matrix[0].length;
  // match the number of columns in original matrix to the rows of the rotated matrix
  for(let i = 0; i < n; i++){
    resultMatrix[i] = [];
    // start setting the rotated row values into the columns of new array
    for(let j = 0; j < m; j++){
      // watch the direction argument for which way to rotate
      if(direction > 0){
        // rotate clockwise
        resultMatrix[i][j] = matrix[m - 1 - j][i];
      } else {
        // rotate counter-clockwise
        resultMatrix[i][j] = matrix[j][n - 1 - i];
      }
    }
  }

  return resultMatrix;
}


O - a 90 degree rotated matrix array
I - a matrix array and a direction of rotation (1 for clockwise and -1 for counter clockwise)
C - Allow to work on both a square and rectangular matrix
E - Input	Output
matrix:
  [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, "A", "B", "C" ], [ "D", "E", "F", "G" ] ]
  [ [ "D", 9, 5, 1 ], [ "E", "A", 6, 2 ], [ "F", "B", 7, 3 ], [ "G", "C", 8, 4 ] ]
matrix:
  [ [ 1 ] ]
  [ [ 1 ] ]
matrix:
  [ [ 1, 2 ], [ 3, 4 ] ]
  [ [ 3, 1 ], [ 4, 2 ] ]
matrix:
  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
  [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]




























// **** Solution Code

var rotateMatrix = function(matrix, direction) {
  direction = direction || 1;
  // Num Rows in original
  var m = matrix.length;
  // Num Cols in original
  var n = matrix[0].length;
  // Initialize empty matrix
  var rotatedMatrix = [];
  // Num cols in original maps to num rows in rotated
  for (var i = 0; i < n; i++) {
    // Create row
    rotatedMatrix[i] = [];
    for (var j = 0; j < m; j++) {
      // Clockwise - reverse columns indeces in rotated matrix
      if (direction > 0) rotatedMatrix[i][j] = matrix[m - 1 - j][i];
      // Counter-clockwise - reverse rows indeces in rotated matrix
      else if (direction < 0) rotatedMatrix[i][j] = matrix[j][n - 1 - i];
    }
  }
  return rotatedMatrix;
};