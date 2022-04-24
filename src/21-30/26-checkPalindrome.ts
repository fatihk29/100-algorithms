/*
  Given the string, check if it is a palindrome.

  Example
  For inputString = "aabaa", the output should be checkPalindrome(inputString) = true;
  For inputString = "abac", the output should be checkPalindrome(inputString) = false;
  For inputString = "a", the output should be checkPalindrome(inputString) = true.

  Note
  Palindromes are not case senstive
*/

function checkPalindrome(inputStr: string): boolean {
  const lowerCaseStr: string = inputStr.toLowerCase();
  const reversedStr: string = lowerCaseStr.split("").reverse().join("");

  return inputStr === reversedStr;
}

console.log(checkPalindrome("aabaa")); // aabaa
console.log(checkPalindrome("abac")); // caba
console.log(checkPalindrome("a")); // a
console.log(checkPalindrome("palindrome")); // false
