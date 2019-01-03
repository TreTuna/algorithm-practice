Spiral Traversal
Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
and prints out every value found, but in a spiral from the upper left in to the center.

Examples
Input   Output
matrix:
[ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ]   [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]
matrix:
[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13, 14, 15 ], [ 16, 17, 18 ], [ 19, 20, 21 ], [ 22, 23, 24 ] ]   [ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]
matrix:
[ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]  [ 1, 2, 3, 4 ]
matrix:
[ [ 1, 2, 3, 4, 5, 6, 7 ] ] [ 1, 2, 3, 4, 5, 6, 7 ]





// *** Solution Code

function spiralTraversal (matrix) { 
    var results = []; 
    var startRowIndex = 0; 
    var endRowIndex = matrix.length - 1; 
    var startColIndex = 0; 
    var endColIndex = matrix[0].length - 1; 

    while (startRowIndex <= endRowIndex && startColIndex <= endColIndex) {

        for (var i = startColIndex; i <= endColIndex; i++) { 
            results.push(matrix[startRowIndex][i]); 
        } 
        startRowIndex++; 

        for (var j = startRowIndex; j <= endRowIndex; j++) { 
            results.push(matrix[j][endColIndex]); 
        } 
        endColIndex--; 

        if (startRowIndex <= endRowIndex) { 
            for (var k = endColIndex; k >= startColIndex; k--) { 
                results.push(matrix[endRowIndex][k]); 
            } 
            endRowIndex--; 
        } 

        if (startColIndex <= endColIndex) { 
            for (var m = endRowIndex; m >= startRowIndex; m--) { 
                results.push(matrix[m][startColIndex]); 
            }
        startColIndex++; 
        } 
    } 
    return results 
}