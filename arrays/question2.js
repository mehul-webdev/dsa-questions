/*
Given N array ElementInternals. CHeck if there exists a pair if, j such that arr[i] + arr[j] = k && i !== j


Example: 
let arr = [9,1,3,5,9], k=12, ans: true
let arr = [2,5,2,7,3], k = 6, ans=false
let arr = [2, 4, -3, 7], k = 8, ans=true

*/

// Approach: Brute Force
// Iterate through each element in the array and compare it with every other element to check if their sum equals k.
// TIme complexity: O(N^2)

// Approach: Optimized

// Time COmplexity: O(N^2)
// Space Complexity: O(1)

function hasPairWithSum(arr, k) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === k && i !== j) {
        return true;
      }
    }
  }

  return false;
}

const result = hasPairWithSum([2, 4, -3, 7], 8);
console.log("the result is", result);
