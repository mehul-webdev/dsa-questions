/*

Question3: Print principal diagnoal


let matrix = [
    [1,2,3,4],    
    [5,6,7,8],    
    [9,10,11,12] 
    [13,14,15,16]  
]

o/p: 1,6,11,16
*/

// Time complexity: O(N)
// SPace complexity: O(1)

function printPrincipalDiagonal(arr) {
  if (arr.length === 0) {
    return "Array Cannot be empty";
  }

  let rowLength = arr.length;
  let colLength = arr[0].length;

  if (rowLength !== colLength) {
    return "Array Should be Square Matrix";
  }

  let row = 0;
  let col = 0;

  while (row < rowLength && col < colLength) {
    console.log(arr[row][col]);
    row++;
    col++;
  }
}

const result = printPrincipalDiagonal([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
