function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log("add(1, 2)=> ", add(1, 2));
console.log("add(3, 5)=> ", add(1, 2));

// --Customized Add
function addCustomized(...param1: number[]): number {
  let total = 0;
  param1.map((item: number) => {
    total += item;
  });
  return total;
}

console.log(
  "addCustomized(1, 2, 3, 4, 5, 6, 7)=> ",
  addCustomized(1, 2, 3, 4, 5, 6, 7)
);
