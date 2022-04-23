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
