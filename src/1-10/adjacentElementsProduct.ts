/*
  Given an array of integers, find the pair of adjacent that has
  the largets product and return that product.

  Example
  For input [3, 6, -2, -5, 7, 4]
  The output should be (7*4) => 28
  7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray: number[]): number {
  let largestProduct = 0;

  if (inputArray.length === 1) {
    return inputArray[0];
  }

  for (let i = 0; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    largestProduct = largestProduct < product ? product : largestProduct;
  }
  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 4]));
console.log(adjacentElementsProduct([9, 6, 9, -5, 7, 4, 9, 0, 9, 8]));
console.log(adjacentElementsProduct([9]));
