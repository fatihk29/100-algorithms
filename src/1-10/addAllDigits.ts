/*
  You are given a two-digit integer. Return the sum of its digits
  Example
  For num = 32
  The output should be addTwoDigits(num) = 11
*/

function addAllDigits(input: number): number {
  const nums = input.toString().split("");

  const a = nums.reduce((previous: string, current: string): number | any => {
    return Number(previous) + Number(current);
  });

  console.log(a);

  return Number(a);
}

console.log("32 -->", addAllDigits(32));
console.log("47 -->", addAllDigits(47));
console.log("122 -->", addAllDigits(102));
console.log("142 -->", addAllDigits(142));
console.log("99_999 -->", addAllDigits(99_999));

// console.log(typeof (Number(previous) + Number(current)));
