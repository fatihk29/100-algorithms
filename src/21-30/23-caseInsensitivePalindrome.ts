/*
  Problem 23.
  Given a string, check it if can become a palindrom through a case change of some (possibly none) letters.

  Example
  for inputString = "AaBaa", the output should be isCaseInsensitivePalindrome(inputString) = true.
  "aabaa" is a palindrome as well as "AABAA", "aaBaa", etc

  for inputString = "abac", the output should be isCaseInsensitivePalindrome(inputString) = false.
  All the strings which can be obtained via changing case of some group of letters,
  i.e. "abac", "Abac", "aBAc" and 13 more, are not palindromes.
*/

function isCaseInsensitivePalindrome(inputStr: string): boolean {
  if (inputStr.length <= 1) return true;

  const lowerCaseStr = inputStr.toLowerCase();

  return lowerCaseStr === lowerCaseStr.split("").reverse().join("");
}

console.log(isCaseInsensitivePalindrome("AaBaa")); // true
console.log(isCaseInsensitivePalindrome("abac")); // false
