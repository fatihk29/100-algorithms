/*
  Given an array of integers, replace all the occurrences of elemToReplace with subsitutionElem
  
  Example
  For input = [1, 2, 1], elemToReplace = 1 and substitutionElem = 3
  The output should be arrayReplace(inputArray, elemToReplace, subsitutionElem) = [3, 2, 3]
*/

function arrayReplace(
  input: number[],
  elemToReplace: number,
  subsitutionElem: number
): number[] {
  input.forEach((element, index) => {
    if (element === elemToReplace) {
      return (input[index] = subsitutionElem);
    }
  });

  return input;
}

console.log(arrayReplace([1, 2, 1, 5, 1, 2, 3, 7, 9, 1], 1, 3));
