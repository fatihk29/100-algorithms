/*
  Given a year, return the century it is in.
  The first century spans from the year 1 up to and including the year 100,
  the second - from the year 101 up to and including the year 200, etc.

  Example
  for year = 1905, the output should be centuryFromYear(year) = 20;
  for year = 1700, the output should be centuryFromYear(year) = 17.

  noted
  the year is from 1400 to 1499. 15th century  
  the year is from 0 to 99. First century
*/

function centuryFromYear(input: number): number {
  const century = input / 100;

  if (input < 0) {
    return null;
  }

  if (input % 100 === 0) {
    return century;
  }

  return Math.floor(century) + 1;
}

console.log(centuryFromYear(1907)); // 20
console.log(centuryFromYear(700)); // 7
console.log(centuryFromYear(2100)); // 21
console.log(centuryFromYear(1)); // 1
console.log(centuryFromYear(-1));
