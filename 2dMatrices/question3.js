/*

Print principal diagonal

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
*/

function printPrincipalDiagnonal(array) {
  if (array.length === 0) {
    return null;
  }

  let rowLength = array.length;
  for (let row = 0; row < rowLength; row++) {
    console.log(array[row][row]);
  }
}

printPrincipalDiagnonal([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
