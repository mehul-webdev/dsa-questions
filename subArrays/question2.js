/*

Question2: 
Print all subarray sum

let arr = [8,2,9,10];
[0,0] = 8;
[0,1] = 10;
[0,2] = 19;
 and so on




*/

// Time complexity

function handleGetPreFixSum(array) {
  if (array.length === 0) {
    return [];
  }
  let prevSum = array[0];
  let prefixSum = [array[0]];

  for (let i = 1; i < array.length; i++) {
    prefixSum[i] = prevSum + array[i];
    prevSum = prefixSum[i];
  }

  return prefixSum;
}

// Time complexity: O(N^2)
//  Space complexity: O(N)

function getSubArraySumUsingPrefix(array) {
  const getPreFixSum = handleGetPreFixSum(array); // Time complexity: O(N); Space complexity: O(N)

  for (let start = 0; start < array.length; start++) {
    for (let end = start; end < array.length; end++) {
      if (start === 0) {
        console.log("here sum is", getPreFixSum[end]);
      } else {
        console.log("here sum is", getPreFixSum[end] - getPreFixSum[start - 1]);
      }
    }
  }
}

// Time complexity: O(N ^ 1)
// Space complexity: O(1)
function printSubarrayUsingCarryForward(array) {
  for (let start = 0; start < array.length; start++) {
    let sum = 0;

    for (let end = start; end < array.length; end++) {
      sum = sum + array[end];
      console.log("the sum is", sum);
    }
  }
}

// Time complexity: O(N^2)
// Space complexity: O(1)

function getMaximumSumOfSubArray(array) {
  let max = array[0];
  let maxSum = 0;

  for (let start = 0; start < array.length; start++) {
    let sum = 0;

    for (let end = start; end < array.length; end++) {
      sum = sum + array[end];
      max = Math.max(max, sum);
      maxSum = maxSum + sum;
    }
  }

  console.log("the max is", [max, maxSum]);
}

const result = getSubArraySumUsingPrefix([8, 2, 9, 10]);
const result2 = printSubarrayUsingCarryForward([8, 2, 9, 10]);
const result3 = getMaximumSumOfSubArray([8, 2, 9, 10]);
