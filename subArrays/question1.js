/*

Print all the subarrays

let arr = [8,2,9,10];

*/

/*
Brute force approach
Time complexity: O(N ^ 3)
Space complexity: O(1)
*/

function handlePrintSubarray(arr) {
  const arrayLength = arr.length;

  for (let start = 0; start < arrayLength; start++) {
    for (let end = start; end < arrayLength; end++) {
      let startIndex = start;
      let endIndex = end;

      for (let i = startIndex; i <= endIndex; i++) {
        process.stdout.write(arr[i] + " ");
      }
      process.stdout.write("\n");
    }
    process.stdout.write("\n");
  }
}

handlePrintSubarray([-1, 3, 2, 3]);
