/*
  Given an array of strings,
  return another array containing all of its longest strings

  Example
  For input ['aab', 'cde', 'bvf']
  The output should be ['aab', 'cde', 'bvf']
*/

function allLongestStrings(inputArray: string[]): string[] {
  let longestLength = 0;
  const outputArray = [];

  inputArray.map((item: string): number => {
    longestLength = longestLength < item.length ? item.length : longestLength;

    if (longestLength === item.length) {
      return outputArray.push(item);
    }
  });

  return outputArray;
}

console.log("first", allLongestStrings(["aab", "cde", "bvf", "aa", "cf"]));
