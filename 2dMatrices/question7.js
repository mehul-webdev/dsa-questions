/*

Given a square 2D matrix mat[N][N]. find the transpose?

What is transpose?

Transpose of a matrix is a new matrix obtained by interchanging the rows and columns of the original  matrux

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

*/

// Time complexity: O(N ^ 2)
// Space complexity: O(1)

function handleGetTranspose(array) {
  if (array.length === 0) {
    return [];
  }

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = array[i][j];
      array[i][j] = array[j][i];
      array[j][i] = temp;
    }
  }

  return array;
}

const result = handleGetTranspose([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);

console.log("the result is", result);
