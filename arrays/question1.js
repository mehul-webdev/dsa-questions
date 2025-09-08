// Given N array elements. FInd the count of elements having atleast one element greater tha inself.

// Example 1: let arr = [9,1,3,5,9], N = 5; Ans: 3
// Example 2: let arr = [2,5,1,4,8,0,8,1,3,8] N = 10; Ans: 7

// Approach 1: Brute Force

// Iterate through element element in the array and then compare with every other element in the array.

// Time Complexity: O(N^2)

// Approach 2: Optimized
// Time complexity: O(N) and Space Complexity: O(1)

function countElementsWithGreater(arr) {
  let largestNumber = arr[0];
  let count = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== largestNumber) {
      count++;
    }
  }

  return count;
}

const count = countElementsWithGreater([2, 5, 1, 4, 8, 0, 8, 1, 3, 8]);
console.log("the count is", count);
