/*

Subaarrays defination:

1. Continous part of an array is called subarray.
2. Single element is an subarray.
3. Complete array is also a subarray


example: [-2,4,6,3,8,1,4,3,2,-10]

Subarrays are:

1. [3,4,5,7,8] -> Not a subarray (not continuous)
2. [-2,4,6,3] -> Subarray (continuous)

*/

/*

To get the no of subarrays in array where n is the length of array: 

Formula: n(n+1)/2

*/
function handleGetNoOfSubaaray(array) {
  const length = array.length;
  return (length * (length + 1)) / 2;
}

const noOfOfSubarrays = handleGetNoOfSubaaray([1, 2, 3, 4]);
console.log(noOfOfSubarrays);

/*

Question1: Print all the subarrays
Question2: Sum of subarray
Question3: Sum of all sub array sum
Question4: contribution element in subarray formula

*/
