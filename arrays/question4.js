/* 

Given N array elements & range [s,e]. Reverse the array from [s,e]. Note s<=e

Example: 

let arr = [-3,4,2,8,7,9,6,2,10] start = 3 and end = 7;
result = [-3,4,2,2,6,9,7,10]

*/

let array = [-3, 4, 2, 8, 7, 9, 6, 2, 10];

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

const result = reverseArrayInRange(array, 3, 7);
console.log("the result is", result);
