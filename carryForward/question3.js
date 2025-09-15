/*

Given an array of size N. Return the length of the smallest subarray which containes both maximum and minimum element of an array.

Example: 

Let arr = [2,2,6,4,5,1,5,2,6,4,1]

ans: 3

*/

// Brute force:

// Time complexity: O(N^3)
// Space Complexity: O(N)

function findSubArrayBrute(array) {
  let currentMinLength = 0;
  const max = Math.max(...array);
  const min = Math.min(...array);

  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      const sub = [];
      let start = i;
      let end = j;

      for (let k = start; k <= end; k++) {
        sub.push(array[k]);
      }

      if (sub.includes(max) && sub.includes(min)) {
        currentMinLength = sub.length;
      }
    }
  }

  return currentMinLength;
}

// Optimize

// Time complexity: O(N);
// Space complexity: O(1);

function findSubArrayOptimize(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  let answer = array.length;

  let lastMinIndex = -1;
  let lastMaxIndex = -1;

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === min) {
      lastMinIndex = i;

      if (lastMaxIndex !== -1) {
        answer = Math.min(answer, lastMaxIndex - i + 1);
      }
    }

    if (array[i] === max) {
      lastMaxIndex = i;
      if (lastMinIndex !== -1) {
        answer = Math.min(answer, lastMinIndex - i + 1);
      }
    }
  }

  return answer;
}

const result1 = findSubArrayBrute([2, 2, 6, 4, 5, 1, 5, 2, 6, 4, 1]);
const result2 = findSubArrayOptimize([8, 8, 8]);

console.log({
  result1,
  result2,
});
