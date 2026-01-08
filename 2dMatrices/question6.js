/*

Given mat[N][M]. Print all the diagonal elements from left to right


let array = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30]
]

*/

function handlePrintLeftToRightDiagonal(array) {
  if (array.length === 0) {
    return;
  }

  let rowLength = array.length;
  let colLength = array[0].length;

  for (let col = 0; col < colLength; col++) {
    let row = 0;
    handlePrintDiagonal(row, col, array);
  }

  for (let row = 1; row < rowLength; row++) {
    let col = 0;
    handlePrintDiagonal(row, col, array);
  }
}

function handlePrintDiagonal(row, col, array) {
  while (row < array.length && col < array[0].length) {
    process.stdout.write(array[row][col] + " ");
    row++;
    col++;
  }
  process.stdout.write("\n");
}

handlePrintLeftToRightDiagonal([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30],
]);
