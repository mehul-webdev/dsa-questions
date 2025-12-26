/*

Question: Give a mat[N][M]. Print elements in spiral order in clockwise direction

let arr = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]

*/

function handlePrint(array) {
  const rowLength = array.length;
  const colLength = array[0].length;

  let top = 0,
    bottom = rowLength - 1,
    left = 0,
    right = colLength - 1;

  const result = [];

  while (top <= bottom && left <= right) {
    // Traverse Left → Right
    for (let col = left; col <= right; col++) {
      result.push(array[top][col]);
    }
    top++;

    // Traverse Top → Bottom
    for (let row = top; row <= bottom; row++) {
      result.push(array[row][right]);
    }
    right--;

    // Traverse Right → Left
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(array[bottom][col]);
      }
      bottom--;
    }

    // Traverse Bottom → Top
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(array[row][left]);
      }
      left++;
    }
  }

  return result;
}

// Example
const result = handlePrint([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);

console.log(result.join(", "));
// Output: 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10
