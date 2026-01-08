/*

Print anti-diagonal

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
*/

function printAntiDiagnonal(array) {
  if (array.length === 0) {
    return null;
  }

  let rowLength = array.length;
  let colLength = array[0].length;

  let row = 0;
  let col = colLength - 1;

  while (row < rowLength && col >= 0) {
    console.log(array[row][col]);
    row++;
    col--;
  }
}

printAntiDiagnonal([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
