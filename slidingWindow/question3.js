/*

Question: Given N array elements and an integer B. Find and return the minimum no of swaps to bring all the numbers <=B together

let arr = [1,12,10,3,14,10,5], B=8

Here logic is first we have to get the elements which are <=b which are good elements. with this we got the length of subarray where all elements should be <=b that is k which is window size

then we will count the bad elements in the k size subarray.

then with help of sliding window if outgoing elemtent is badELement then will do minus and if badElement is coming then we will do plus. we will return minimum



*/

// Time complexity: O(N);
// Space complexity: O(1)

function handleGetRequireNoOfSwaps(array, k) {
  const getGoodElement = array.filter((ele) => ele <= k).length;
  let badElements = 0;

  let left = 1;
  let right = getGoodElement;

  for (let i = 0; i < getGoodElement; i++) {
    if (array[i] > k) {
      badElements++;
    }
  }

  let ans = badElements;

  while (right < array.length) {
    if (array[left - 1] > k) {
      badElements--;
    }

    if (array[right] > k) {
      badElements++;
    }

    ans = Math.min(ans, badElements);

    left++;
    right++;
  }

  return ans;
}

const result = handleGetRequireNoOfSwaps([25, 30, 2, 18, 7, 6, 9, 50, 3], 10);
console.log("the result is", result);
