/*

Given mat[M][N]. Print the col-wise sum

const array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];


*/

// Time complexity: O(NxM)
// Space complexity: O(1)

function printColWiseSum(array) {
  if (array.length === 0) {
    return 0;
  }

  const rowLength = array.length;

  const colLength = array[0].length;

  for (let i = 0; i < colLength; i++) {
    let sum = 0;

    for (let j = 0; j < rowLength; j++) {
      sum = sum + array[j][i];
    }
    console.log(`the sum for the ${i + 1} col is ${sum}`);
  }
}

printColWiseSum([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
