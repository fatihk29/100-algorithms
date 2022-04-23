function addBorder(input: string[]): any {
  let border = "*".repeat(input[0].length + 2);

  input.unshift(border);
  input.push(border);

  return input;
}

console.log(addBorder(["abc", "ded"]));
