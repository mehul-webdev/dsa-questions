/*
Question:
In how many subarrays does the element at index `i` appear?

Formula:
(i + 1) * (n - i)

Where:
- i = index of the element
- n = length of the array

Explanation:

A subarray is defined by:
- a start index (start)
- an end index (end)

For the element at index `i` to be present in a subarray:
start <= i <= end

-------------------------------------------------
1) Possible start indices

The subarray can start only from index 0 up to index i.
If it starts from i+1 or later, index i will not be included.

Possible starts:
0, 1, 2, ..., i

Total start choices = i + 1

-------------------------------------------------
2) Possible end indices

The subarray can end only from index i up to index n-1.

Possible ends:
i, i+1, i+2, ..., n-1

Total end choices = n - i

-------------------------------------------------
3) Total subarrays containing index i

For each valid start, we can pair it with any valid end.

Total subarrays =
(number of start choices) * (number of end choices)
= (i + 1) * (n - i)

-------------------------------------------------
Example:

arr = [3, -2, 4, -1, 2, 6]
i = 3
n = 6

Start choices = 4  (0 to 3)
End choices   = 3  (3 to 5)

Total subarrays containing index 3:
4 * 3 = 12
-------------------------------------------------
*/

function handleGetContribution(array, index) {
  return (index + 1) * (array.length - index);
}

const contribution = handleGetContribution([3, -2, 4, -1, 2, 6], 3);
console.log("here contribution is", contribution);
