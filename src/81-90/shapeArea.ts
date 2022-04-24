/*
  Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
  A 1-interesting polygon is just a square with a side of length 1.
  An n-interesting polygon is obtained by taking the n - 1-interesting polygon
  and appending 1-interesting polygons to its rim, side by side.
  You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

  Example
  For n = 2, the output should be shapeArea(n) = 5;
  For n = 3, the output should be shapeArea(n) = 13.
*/

function shapeArea(value: number): number {
  return Math.pow(value, 2) + Math.pow(value - 1, 2);
}

console.log(shapeArea(2)); // 5
console.log(shapeArea(3)); // 13
console.log(shapeArea(4)); // 25
console.log(shapeArea(5)); // 41

/*
  2 => 2^2 + 1
  3 => 3^2 + 4
  4 => 4^2 + 9
  5 => 5^2 + 16
  formulate
  x => x^2 + (x - 1)^2
*/
