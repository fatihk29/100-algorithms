/*
  Check whether the given string is a subsequence of the plaintext alphabet.
  
  Example
  For s = "effg" or s = "cdce", the output should be alphabetSubsequence(s) = false
  For s = "ace" or s = "bxz", the output should be alphabetSubsequence(s) = true.
*/

function alphabetSubsequence(str: string): boolean {
  const chars: string[] = str.split("");
  const charValues: number[] = [];

  chars.map((char: string) => {
    const m = char.charCodeAt(0);
    charValues.push(m);
  });

  for (let i = 0; i < charValues.length - 1; i++) {
    if (charValues[i] > charValues[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence("effgz"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("acem"));
console.log(alphabetSubsequence("bxz"));

// second solution

function alphabetSubsequenceBetter(str: string): boolean {
  const charValues: number[] = [];

  for (let i = 0; i < str.length - 1; i++) {
    console.log(str.charCodeAt(i));
  }

  for (let i = 0; i < charValues.length - 1; i++) {
    if (charValues[i] > charValues[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequenceBetter("effgz"));
