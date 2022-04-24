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

function sumOfTwo(firstInp: number[], secondinp: number[], v: number): boolean {
  let hashMap = {};
  for (let num of firstInp) {
    const difference = v - num;
    hashMap[difference] = difference;
  }

  for (let num of secondinp) {
    if (hashMap.hasOwnProperty(num)) {
      return true;
    }
  }

  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
