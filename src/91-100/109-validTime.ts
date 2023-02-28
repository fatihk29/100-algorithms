/*
  Check if the given string is a correct time representation of the 24-hour clock.
  Example
    For time = "13:58", the output should be validTime(time) = true;
    For time = "25:51", the output should be validTime(time) = false;
    For time = "02:76", the output should be validTime(time) = false.
*/

function validTime(time: string): boolean {
  const [hours, mins] = time.split(":");

  if (0 > Number(hours) || 23 < Number(hours)) {
    return false;
  }
  if (0 > Number(mins) || 59 < Number(mins)) {
    return false;
  }

  return true;
}

console.log(validTime("13:58"));
console.log(validTime("25:51"));
console.log(validTime("02:76"));

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");

console.log("words", words);
