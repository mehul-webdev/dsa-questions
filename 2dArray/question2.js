/*

Question: Given mat[N][M]. print the column wise sum


let matrix = [
    [1,2,3,4],    
    [5,6,7,8],    
    [9,10,11,12]  
]
  o/p --->   15,18,21,24
*/

// Time Complexity: O(N*M)
// Space Complexity: O(1)

function handleColWiseSum(array) {
  if (array.length === 0) {
    return 0;
  }

  let rowLength = array.length; // ----> 3
  let colLength = array[0].length; //-----> 4

  let col = 0;
  let row = 0;

  while (col < colLength) {
    let sum = 0;

    while (row < rowLength) {
      sum = sum + array[row][col];
      row++;
    }
    console.log("the sum is", sum);
    row = 0;
    col++;
  }
}

const result = handleColWiseSum([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
