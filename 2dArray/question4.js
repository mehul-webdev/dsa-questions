/*

Question4: Print anti-diagnoal


let matrix = [
    [1,2,3,4],    
    [5,6,7,8],    
    [9,10,11,12] 
    [13,14,15,16]  
]

o/p: 4,7,10,13
*/

// Time complexity: O(N)
// SPace complexity: O(1)

function printAntiDiagonal(arr) {
  if (arr.length === 0) {
    return "Array Cannot be empty";
  }

  let rowLength = arr.length;
  let colLength = arr[0].length;

  if (rowLength !== colLength) {
    return "Array Should be Square Matrix";
  }

  let row = 0;
  let col = colLength - 1;

  while (row < rowLength && col >= 0) {
    console.log(arr[row][col]);
    row++;
    col--;
  }
}

const result = printAntiDiagonal([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
