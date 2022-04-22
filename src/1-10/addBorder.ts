function addBorder(input: string[]): any {
  let wall = "*".repeat(input[0].length+2);

  input.unshift(wall);
  input.push(wall);


  return input;
}

console.log(addBorder(["abc", "ded"]));
