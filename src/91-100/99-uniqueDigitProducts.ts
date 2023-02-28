/*
Example
  For a = [2, 8, 121, 42, 222, 23], the output should be uniqueDigitProducts(a) = 3.
  Here are the products of the array's elements:
  2: product(2) = 2; 8: product(8) = 8; 121: product(121) = 1 * 2 * 1 = 2; 42: product(42) = 4 * 2 = 8; 222: product(222) = 2 * 2 * 2 = 8; 23: product(23) = 2 * 3 = 6.
  As you can see, there are only 3 different products: 2, 6 and 8.
*/

function uniqueDigitProducts(input: number[]): number {
  const products: number[] = [];

  input.forEach((num) => {
    const product = getDigitProduct(num);
    console.log("product", product);
    if (!products.includes(product)) {
      products.push(product);
    }
  });

  return products.length;
}

function getDigitProduct(num: number) {
  const digits: string[] = num.toString().split("");
  let product = 1;

  digits.map((digit) => {
    product *= parseInt(digit);
  });

  return product;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
