/*
  You are given an array of positive integers - the weights of the people.
  Return an array of two integers, where the first element is the total weight of team 1,
  and the second element is the total weight of team 2 after the division is complete.

  Example
  For a = [50, 60, 60, 45, 70], the output should be alternatingSums(a) = [180, 105].
*/

function alternatingSums(input: number[]): number[] {
  let evenSum = 0;
  let oddSum = 0;

  input.map((item, index) => {
    if (index % 2 === 0) {
      evenSum += item;
    } else {
      oddSum += item;
    }
  });

  return [evenSum, oddSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));

// better solution
function alternatingSumsBetter(input: number[]): number[] {
  return input.reduce(
    (previous, currVal, ind) => {
      previous[ind % 2] = previous[ind % 2] + currVal;
      return previous;
    },
    [0, 0]
  );
}

console.log(alternatingSumsBetter([50, 60, 60, 45, 70]));
