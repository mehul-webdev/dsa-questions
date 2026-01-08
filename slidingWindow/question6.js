/*

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
1 <= k <= nums.length
*/

// time complexity : O(N * K)
// space complexity: O(1)

function handleMaxSlidingWindow(array, windowSize) {
  if (array.length === 0) {
    return 0;
  }

  const result = [];

  let start = 0;
  let end = windowSize;

  while (end <= array.length) {
    let max = array[start];
    for (let i = start; i < end; i++) {
      max = Math.max(array[i], max);
    }

    result.push(max);
    start++;
    end++;
  }

  return result;
}

const result = handleMaxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
console.log("the result is", result);

// Need to solve in optimized way

// let initialMaxSize = array[0];

//   for (let i = 0; i < windowSize; i++) {
//     initialMaxSize = Math.max(array[i], initialMaxSize);
//   }

//   result.push(initialMaxSize);

//     let start = 1;
//     let end = windowSize + 1;

//     while (end <= array.length) {
//         let incoming = array[end];

//     }
