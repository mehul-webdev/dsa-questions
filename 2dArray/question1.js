/*

Question: Given Matrix[N][M]. print the row wise sum;

let matrix = [
    [1,2,3,4],    -----> 10
    [5,6,7,8],    -----> 26
    [9,10,11,12]  -----> 42
]

*/

// Time Complexity: O(N*M)
// Space Complexity: O(1)

function handleRowWiseSum(array) {
  for (let row = 0; row < array.length; row++) {
    let sum = 0;

    for (let col = 0; col < array[row].length; col++) {
      sum = sum + array[row][col];
    }

    console.log("the sum is", sum);
  }
}

const result = handleRowWiseSum([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
