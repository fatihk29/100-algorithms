/*
  Sum all the prime numbers up to and including the provide number
  A prime number is defined as a number greater than one and having only two divisors,
  one and itself.

  Example
  For input 10, should 17
*/

function summAllPrimeNumbers(input: number): number {
  let primesTotal = 0;

  for (let i = 2; i < input; i++) {
    for (let j = 2; j <= i; j++) {
      console.log(j);
      if (i === j) {
        console.log(i);
        primesTotal += i;
      } else if (i % j === 0) {
        break;
      }
    }
  }

  return primesTotal;
}

// console.log(summAllPrimeNumbers(17));
console.log(summAllPrimeNumbers(10));
