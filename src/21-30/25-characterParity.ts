/*
  Given a character, check if it represents an odd digit, an even digit or not a digit at all.

  Example
  For symbol = '5', the output should be characterParity(symbol) = "odd";
  For symbol = '8', the output should be characterParity(symbol) = "even";
  For symbol = 'q', the output should be characterParity(symbol) = "not a digit".
*/

function characterParity(input: string): string {
  const result = parseInt(input);

  if (result % 2 === 0) {
    return "even";
  } else if (result % 2 === 1) {
    return "odd";
  }
  return "not a digit";
}

console.log(characterParity("5")); // odd
console.log(characterParity("8")); // even
console.log(characterParity("q")); // not a digit

// Another solution

function characterParityAnother(input: string): string {
  const num = Number(input);

  if (isNaN(num)) {
    return "not a digit";
  }

  return num % 2 === 0 ? "even" : "odd";
}

console.log(characterParityAnother("5"));
console.log(characterParityAnother("8"));
console.log(characterParityAnother("q"));
console.log(characterParityAnother("-1"));
