/*

Question1: Print all subarrays

*/

// Time complexity : O(n^3)
// Space complexity: O(1)

function printSubarray(array) {
  for (let start = 0; start < array.length; start++) {
    for (let end = start; end < array.length; end++) {
      let sub = [];
      for (let k = start; k <= end; k++) {
        sub.push(array[k]);
        // console.log(array[k]);
      }
      console.log(sub);
    }
  }
}

const result = printSubarray([1, 2, 3, 4]);
