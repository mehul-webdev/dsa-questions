/*

Given a string s of lower case characters. Return the count of pairs (i,j) such that i < j & s[i]='a' && s[j] = 'g';



example: 

let str='abegag';

There are three (0,3), (0,5), (4,5): answer is 3

*/

// Brute Force

// Time Complexity: O(N ^ 2)
// Space COmplexity: O(1)

function handleGetCountBrute(string) {
  let count = 0;

  let i = 0;

  while (i < string.length - 1) {
    let j = i + 1;
    if (string[i] === "a") {
      while (j < string.length) {
        let charOfJ = string[j];

        if (string[i] === "a" && charOfJ === "g") {
          count++;
        }
        j++;
      }
    }
    i++;
  }

  return count;
}

// Optimzie approach:

function handleGetCountOptimize(string) {
  let count = 0;
  let ans = 0;
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === "g") {
      count++;
    } else if (string[i] === "a") {
      ans = ans + count;
    }
  }

  return ans;
}

const result1 = handleGetCountBrute("bcaggaag");
const result2 = handleGetCountOptimize("bcaggaag");
console.log(result1);
console.log(result2);
