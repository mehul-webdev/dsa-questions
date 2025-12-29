/*
 get sum all subarray sum

*/

// Time complexity: O(N ^ 2)
// Space complexity: O(1)

function handleGetAllSubrraySum(array) {
  let sum = 0;
  let arrayLength = array.length;

  for (let start = 0; start < arrayLength; start++) {
    let subArraySum = 0;

    for (let end = start; end < arrayLength; end++) {
      subArraySum += array[end];
    }

    sum += subArraySum;
  }

  return sum;
}

const sum = handleGetAllSubrraySum([1, 2, 3, 4]);
console.log("here sum is", sum);

function handleGetAllSubarraySumUsingContributionTechnique(array) {
  let sum = 0;

  for (let start = 0; start < array.length; start++) {
    const NoOfTimeAdded = (start + 1) * (array.length - start); // refer question 4 for this formula
    const contribution = NoOfTimeAdded * array[start];
    sum += contribution;
  }
  return sum;
}

const sumUsingContribution = handleGetAllSubrraySum([1, 2, 3, 4]);
console.log("here sum using contribution", sumUsingContribution);
