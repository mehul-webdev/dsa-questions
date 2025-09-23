/*

Find the sum of all subarray

let arr = [8, 2, 9, 10]
O/P: 138 

*/

// Time complexity: O(N)
// Space complexity: O(1)

function findSumOfSubArray(array) {
  let sum = 0;
  for (let start = 0; start < array.length; start++) {
    let contribution = (start + 1) * (array.length - start);

    // Here contribution means how many time this item comes in all subarray
    // contribution * array[start] is how much value is contributed in the sum

    sum = sum + contribution * array[start];
  }

  return sum;
}

const result = findSumOfSubArray([8, 2, 9, 10]);
console.log("the result is", result);
