/*

GIven an array of size N. Count the no of leaders.
Leader: An elemenet strictly greater than all elements on the right side.


example: let arr = [2,5,3,4,17,16]

answer: 2

*/

// Brute force

// Time complexity: O(N ^ 2);
// Space Complexity: O(1)

function findLeaderBrute(array) {
  let leaders = 0;

  for (let i = 0; i < array.length; i++) {
    let flag = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      leaders++;
    }
  }

  return leaders;
}

// Optimize approach

// Time complexity: O(N);
// Space complexity: O(1)

function findLeaderOptimize(array) {
  let leaders = 0;
  let greaterElement = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] > greaterElement) {
      leaders++;
      greaterElement = array[i];
    }
  }

  return leaders;
}

const result1 = findLeaderBrute([2, 5, 3, 4, 17, 16]);
const result2 = findLeaderOptimize([2, 5, 3, 4, 17, 16]);

console.log("the result1 is", result1);
console.log("the result2 is", result2);
