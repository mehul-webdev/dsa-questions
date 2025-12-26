/*

Question5: Given mat[N][M]. Print all the diagnoal elements from right to left

let arr = [
    [1,2,3,4,5],
    [6,7,8,9,1],
    [1,2,3,4,5],
    [6,7,8,9,1],   
    [1,2,3,4,5],
    [6,7,8,9,1],
]

*/

// Time complexity: O(N*M)
// Space Complexity: O(1)

function handlePrintDiagonals(arr, row, col) {
  let rowLength = arr.length;

  while (col >= 0 && row < rowLength) {
    console.log(arr[row][col]);
    row++;
    col--;
  }

  console.log("==============================");
}

function printDiagonals(arr) {
  if (arr.length === 0) {
    return "Array Cannot be empty";
  }

  let rowLength = arr.length;
  let colLength = arr[0].length;

  for (let col = 0; col < colLength; col++) {
    let row = 0;
    handlePrintDiagonals(arr, row, col);
  }

  for (let row = 1; row < rowLength; row++) {
    let col = colLength - 1;
    handlePrintDiagonals(arr, row, col);
  }
}

let result = printDiagonals([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 1],
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 1],
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 1],
]);
