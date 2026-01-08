/*

Given a square matrix mat[N][N]. Rotate by 90deg clockwise from top right as a reference in place.

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
*/

// Time complexity: O(N^2)
// Space complexity: O(N ^ 2)

function handleRotate(array) {
  let matrixArray = createNullMatrix(array.length);

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      matrixArray[j][array.length - i - 1] = array[i][j];
    }
  }

  return matrixArray;
}

const result = handleRotate([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);

console.log("here resiult is", result);

function createNullMatrix(n) {
  return Array.from({ length: n }, () => Array.from({ length: n }, () => null));
}

// solving without space

// Time complexity: O(N ^ 2)
// Space complexity: O(1)

function handleRotateMatrix(array) {
  // Step 1: transpose array:

  const transpose = handleTransposeMatrix(array);

  // Step2: Reverse every row
  const handleGetReverseOfEachRow = handleReverseEachRow(transpose);
  return handleGetReverseOfEachRow;
}

function handleTransposeMatrix(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = array[i][j];
      array[i][j] = array[j][i];
      array[j][i] = temp;
    }
  }

  return array;
}

function handleReverseEachRow(array) {
  for (let i = 0; i < array.length; i++) {
    const row = array[i];

    let start = 0;
    let end = array.length - 1;

    while (start < end) {
      let temp = row[start];
      row[start] = row[end];
      row[end] = temp;
      start++;
      end--;
    }
  }

  return array;
}

const reasult2 = handleRotateMatrix([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]);

console.log("here result 2 is", reasult2);
