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



// Function to print the subarray:

function printSubarrays(arr) {

}



function handleGetNoOfSubaaray(array) {
    const length = array.length;
    return (length * (length + 1) / 2);
}