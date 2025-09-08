/* 

    Find the number of equilibrium index in the given array of size N where equilibrium index is defined as: 

    sum of all elements to the left of index === sum of all elements to the right of index.


    Note: for i = 0; left_sum = 0 and for i = N-1, right_sum = 0;

    let arr = [-3,2,4,1]

*/

import createPrefixArray from "./prefixSum.js";

// Brute force approach

// Time Complexity: O(N ^ 2)
// Space Complexity: O(1)

function handleSum(data) {
  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    sum = sum + data[i];
  }

  return sum;
}

const handleCountEquilibriumIndexBrute = (array) => {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    let leftSum = handleSum(array.slice(0, i));
    let rightSum = handleSum(array.slice(i + 1, array.length));

    if (leftSum === rightSum) {
      count++;
    }
  }

  return count;
};

// Optimize code:

// Time Complexity: O(N)
// Space Complexity: O(N)

const handleCountEquilibriumIndexOptimize = (array) => {
  const prefixSum = createPrefixArray(array);

  let count = 0;

  for (let i = 0; i <= array.length - 1; i++) {
    let leftSum = 0;
    let rightSum = 0;

    if (i === 0) {
      leftSum = 0;
    } else {
      leftSum = prefixSum[i - 1];
    }

    if (i === array.length - 1) {
      rightSum = 0;
    } else {
      rightSum = prefixSum[array.length - 1] - prefixSum[i];
    }

    if (leftSum === rightSum) {
      count++;
    }
  }

  return count;
};

const resultBrute = handleCountEquilibriumIndexBrute([-7, 1, 5, 2, -4, 3, 0]);
const resultOptimize = handleCountEquilibriumIndexOptimize([
  -7, 1, 5, 2, -4, 3, 0,
]);

console.log("Result for the optimize solution", resultOptimize);
console.log("Result for the brute force solution", resultBrute);
