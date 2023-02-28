/*
  You have two integer arrays, a and b, and an integer target value v.
  Determine whether there is a pair of numbers, where one number is taken from a and the other from b
  that can be added together to get sum of v.

  Example
  For a [1, 2, 3]
  b [10, 20, 30, 40]
  and v = 42, the output should be sumOfTwo(a, b, v) = true

  Hints 
  - hasOwnProperty
*/

function sumOfTwo(first: number[], second: number[], total: number): boolean {
  let hashMap = {};
  for (let num of first) {
    const difference = total - num;
    hashMap[difference] = 0;
  }
  console.log("hashMap", hashMap);

  for (let num of second) {
    if (hashMap.hasOwnProperty(num)) {
      return true;
    }
  }

  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
console.log(sumOfTwo([7, 8, 9], [43, 20, 30, 40], 50));

// my solution
function sumOfTwoN(first, second, total) {}
