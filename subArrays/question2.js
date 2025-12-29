/*

Question: Sum of the subarrays


let arr = [-1,3,2,3]

example: [-1] : -1, [-1,3] : 2 ... and so on


*/

/*
Time complexity: O(n ^ 2)
Space complexity: O(1)

*/

function printSumofSubarray(arr) {
  const arrayLength = arr.length;
  for (let start = 0; start < arrayLength; start++) {
    let sum = 0;

    for (let end = start; end < arrayLength; end++) {
      sum = sum + arr[end];
      console.log(`Here start is ${start} and end is ${end} is : ${sum}`);
    }
  }
}

printSumofSubarray([-1, 3, 2, 3]);

// Solving this question using prefix sum

// Time complexity: O(N ^ 2)
// Space complexity: O(N)

function handleGetPrefixSum(arr) {
  let prefixArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      prefixArray[i] = prefixArray[i - 1] + arr[i];
    } else {
      prefixArray[i] = arr[i];
    }
  }

  return prefixArray;
}

function printSumofSubarrayUsingPrefixSum(arr) {
  let prefixSum = handleGetPrefixSum(arr);

  const arrayLength = arr.length;
  for (let start = 0; start < arrayLength; start++) {
    for (let end = start; end < arrayLength; end++) {
      let sum = 0;

      if (start === 0) {
        sum = sum + prefixSum[end];
      } else {
        sum = sum + prefixSum[end] - prefixSum[start - 1];
      }

      console.log("here sum is", sum);
    }
  }
}

printSumofSubarrayUsingPrefixSum([-1, 3, 2, 3]);

// Print maxium subarray:

function handleGetMaxSubarraySum(arr) {
  let max = arr[0];

  for (let start = 0; start < arr.length; start++) {
    let sum = 0;

    for (let end = start; end < arr.length; end++) {
      sum = sum + arr[end];
    }

    max = Math.max(max, sum);
  }

  return max;
}

const maxSum = handleGetMaxSubarraySum([15, 3, 2, 3, 1]);
console.log("the max sum is", maxSum);
