/*

Given mat[N][M]. Print all the diagonal elements from right to left


let array = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30]
]

*/

// Time complexity: O(Nx<)

function handleGetDIagonalElements(array) {
  let rowLength = array.length;
  let colsLength = array[0].length;

  for (let col = 0; col < colsLength; col++) {
    const row = 0;
    handlePrintDiagonal(row, col, array);
  }

  for (let row = 1; row < rowLength; row++) {
    const col = colsLength - 1;
    handlePrintDiagonal(row, col, array);
  }
}

function handlePrintDiagonal(row, col, array) {
  while (row < array.length && col >= 0) {
    process.stdout.write(array[row][col] + " ");
    row++;
    col--;
  }

  process.stdout.write("\n");
}

handleGetDIagonalElements([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30],
]);
