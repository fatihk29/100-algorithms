function areSimilar(a: number[], b: number[]): boolean[] {
  let firstInputFrequency = getDigitFrequency(a);
  console.log(firstInputFrequency);
  let secondInputFrequency = getDigitFrequency(b);

  const result = Object.keys(firstInputFrequency).map((item) => {
    firstInputFrequency[item] -= secondInputFrequency[item];

    console.log(firstInputFrequency);

    if (firstInputFrequency[item] !== 0) {
      return false;
    } else {
      return true;
    }
  });

  Object.keys(firstInputFrequency).reduce((previous, current) => {
    return previous;
  });

  // return result;
}

function getDigitFrequency(input) {
  let frequency = {};
  for (let a of input) {
    if (frequency.hasOwnProperty(a)) {
      frequency[a]++;
    } else {
      frequency[a] = 1;
    }
  }
  return frequency;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
// console.log(areSimilar([1, 2, 3], [2, 1, 3]));
// console.log(areSimilar([1, 2, 2], [2, 1, 1]));


// no completed