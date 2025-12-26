/*

Given a mat[N][N]. print all the boundry elements of the matrix in clockwise direction.

let arr = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]


o/p: 1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6
*/

function printElements(array) {
  const rowLength = array.length;
  const colLength = array[0].length;

  let row = 0;
  let col = 0;

  while (col < colLength - 1) {
    console.log(array[row][col]);
    col++;
  }

  while (row < rowLength - 1) {
    console.log(array[row][col]);
    row++;
  }

  while (col > 0) {
    console.log(array[row][col]);
    col--;
  }

  while (row > 0) {
    console.log(array[row][col]);
    row--;
  }
}

const result = printElements([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);
