/*

Question6: GIven a square 2d matrix mat[N][M]. FInd the transpose.


What is transpose?

->Transpose of  matrix is a new matrix obtained by interchanging the rows and cols of the original mat


let matrix = [
    [1,2,3,4],    
    [5,6,7,8],    
    [9,10,11,12] 
    [13,14,15,16]  
]



o/p: [
[1,5,9,13],
[2,6,10,14],
[2,7,11,15],
[4,8,12,16]

]
*/

// Time complexity: O(N ^ 2)
// Space complexity: O(1)

function handleTranpose(arr) {
  if (arr.length === 0) {
    return "Array Cannot be empty";
  }

  let rowLength = arr.length;
  let colLength = arr[0].length;

  if (rowLength !== colLength) {
    return "Array Should be Square Matrix";
  }

  for (let col = 0; col < colLength; col++) {
    for (let row = col + 1; row < rowLength; row++) {
      let temp = arr[row][col];
      arr[row][col] = arr[col][row];
      arr[col][row] = temp;
    }
  }

  return arr;
}

const result = handleTranpose([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);

console.log("the result is", result);
