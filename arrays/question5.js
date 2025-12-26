/*
    Given N array elements. Rotate arry from last to first by k times;

    let arr = [3,-2,1,4,6,9,8] k = 3;

*/

let array = [3, -2, 1, 4, 6, 9, 8];

function rotateAnArray(arr, k) {
  if (k > arr.length) {
    k = k % arr.length;
  }

  reverseArrayInRange(arr, 0, arr.length - 1);
  reverseArrayInRange(arr, 0, k - 1);
  reverseArrayInRange(arr, k, arr.length - 1);
  return arr;
}

function reverseArrayInRange(arr, start = 0, end = 0) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

// Time complexity : O(N);
// Space Complexity : O(1)

const result = rotateAnArray(array, 8);
console.log("the result is", result);
