import createPrefixArray from "./prefixSum.js";

/*

GIven N array elements and Q queries. For each query, calculate sum of all elements from L to R (0 Based Indexing).

Example: let arr = [-3,6,2,4,5,2,8,-9,3,1]

Queries(Q): 5

L R
4 8 -> 9
3 7 -> 10
1 3 -> 12
0 4 -> 14
7 7 -> -9

*/

let arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];
let queries = [
  [4, 8],
  [3, 7],
  [1, 3],
  [0, 4],
  [7, 7],
];

// Brute Force Approach

// Time Complexity: O(Q * N);
// Ṣpace Complexity: O(Q)

function sumOfElementsOne(arr, queries) {
  let sumsArr = [];

  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    let innerSum = 0;
    for (let j = start; j <= end; j++) {
      innerSum = innerSum + arr[j];
    }

    sumsArr.push(innerSum);
  }

  return sumsArr;
}

// Problem solve using prefix sum:

// Time Complexity: O(N + Q)
// Space Complexity: O(N)

function sumOfElementsTwo(arr, queries) {
  let prefixArr = createPrefixArray(arr);
  const result = [];

  for (let i = 0; i < queries.length; i++) {
    const [start, end] = queries[i];
    let sum = 0;
    if (start === 0) {
      sum = prefixArr[end];
    } else {
      sum = prefixArr[end] - prefixArr[start - 1];
    }

    result.push(sum);
  }

  return result;
}

const result1 = sumOfElementsOne(arr, queries);
const result2 = sumOfElementsTwo(arr, queries);

console.log("the result is result1", result1);
console.log("the result is result2", result2);
