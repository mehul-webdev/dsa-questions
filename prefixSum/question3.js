/*

Given N array elements & Q queries. For each query, find count of even number in [L,R] range.

let arr = [2,4,3,7,9,8,6,5,4,9];

let queries = [[4,8],[3,9],[0,4]]


*/

import createPrefixArray from "./prefixSum.js";

// Brute force

// T.C: O(N * Q);
// S.C: O(1)

const countEvenNumbersInRangeBrute = (array, queries) => {
  const result = [];

  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    let count = 0;
    for (let j = start; j <= end; j++) {
      if (array[j] % 2 === 0) {
        count++;
      }
    }

    result.push(count);
  }

  return result;
};

const countEvenNumbersInRangeOptimize = (array, queries) => {
  const result = [];

  const tempArray = array.map((number) => (number % 2 === 0 ? 1 : 0));
  const prefixArray = createPrefixArray(tempArray);

  for (let i = 0; i < queries.length; i++) {
    let [start, end] = queries[i];

    let count = 0;

    if (start === 0) {
      count = prefixArray[end];
    } else {
      count = prefixArray[end] - prefixArray[start];
    }

    result.push(count);
  }

  return result;
};

const result = countEvenNumbersInRangeBrute(
  [2, 4, 3, 7, 9, 8, 6, 5, 4, 9],
  [
    [4, 8],
    [3, 9],
    [0, 4],
  ]
);

const result2 = countEvenNumbersInRangeOptimize(
  [2, 4, 3, 7, 9, 8, 6, 5, 4, 9],
  [
    [4, 8],
    [3, 9],
    [0, 4],
  ]
);

console.log("the result 1 is", result);
console.log("the result 2 is", result2);
