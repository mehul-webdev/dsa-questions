/*

Question: print start and end index of the subarray with len = k;

let array = [1,2,3,4,5,6,7,8] k = 3

*/

function handleGetIndex(array, k) {
  let left = 0;
  let right = k - 1;

  while (right < array.length) {
    console.log([left, right]);
    left++;
    right++;
  }
}

const result = handleGetIndex([1, 2, 3, 4, 5, 6, 7, 8], 3);
