/*

Problem Description

You are given an integer array C of size A. Now you need to find a subarray (contiguous elements) so that the sum of contiguous elements is maximum.
But the sum must not exceed B.


Problem Constraints

1 <= A <= 103
1 <= B <= 109
1 <= C[i] <= 106


Input Format

The first argument is the integer A.
The second argument is the integer B.
The third argument is the integer array C.


Output Format

Return a single integer which denotes the maximum sum.


Example Input

Input 1:
A = 5
B = 12
C = [2, 1, 3, 4, 5]
Input 2:

A = 3
B = 1
C = [2, 2, 2]


Example Output

Output 1:
12
Output 2:

0

*/

function handleMaximumSubarray(A, B, C) {
  let maxSum = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < A; right++) {
    sum = sum + C[right];

    while (sum > B) {
      sum = sum - C[left];
      left++;
    }

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

console.log(handleMaximumSubarray(3, 1, [2, 2, 2]));
