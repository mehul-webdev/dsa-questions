/* 
    Given an array of integers, reverese the order of the elements in the array.
    For example, if the input is [1, 2, 3, 4, 5], the output should be [5, 4, 3, 2, 1].


*/

const array = [1, 2, 3, 4, 5];

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }

  return arr;
}

/* 
    Time complexity: O(N);
    Space Complexity: O(1)
*/

const result = reverseArray(array);
console.log("the result is", result);
