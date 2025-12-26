// Time Complexity: O(N)
function createPrefixArray(arr) {
  let prefixArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      prefixArray[i] = prefixArray[i - 1] + arr[i];
    } else {
      prefixArray[i] = arr[i];
    }
  }

  return prefixArray;
}

export default createPrefixArray;

// module.exports = createPrefixArray;
