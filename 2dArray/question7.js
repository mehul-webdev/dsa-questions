/*

Question7: Given a square matrix mat[N][M]. Rotate by 90deg clockwise from top right as a reference in place.
let arr = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
]

output: [
    [21,16,11,6,1],
    [22,17,12,7,2],
    [23,18,13,9,4],
    [24,19,14,9,4],
    [25,20,15,10,5]
]

Step1: find transpose.
Step2: Reverse each row

*/

function handleClockWise(array) {
  if (array.length === 0) {
    return "Array Cannot be empty";
  }

  let rowLength = array.length;
  let colLength = array[0].length;

  if (rowLength !== colLength) {
    return "Array Should be Square Matrix";
  }

  for (let col = 0; col < colLength; col++) {
    for (let row = col + 1; row < rowLength; row++) {
      let temp = array[row][col];
      array[row][col] = array[col][row];
      array[col][row] = temp;
    }
  }

  for (let row = 0; row < rowLength; row++) {
    array[row] = array[row].reverse();
  }

  console.log("the array is", array);
}

const result = handleClockWise([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);
