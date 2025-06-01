class Solution {
  largestElement(nums) {
    if (nums.length === 0) {
      return null;
    }

    let largestNumber = nums[0];

    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > largestNumber) {
        largestNumber = nums[i];
      }
    }

    return largestNumber;
  }
}

const result = new Solution().largestElement([1, 2, 3, 4, 5]);
console.log("the result is", result);
