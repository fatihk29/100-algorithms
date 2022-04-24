/*
  Problem 22.
  n children have got m pieces of candy. They want to eat as much as they can,
  but each child must eat exactly the same amount of candy as any other child.
  Determine how many pieces of candy will be eaten by all the children together.
  Individual pieces of candy cannot be split.

  Example
  for children = 3 and total candies = 10
  the output should be candies(children, numOfCandy) = 9
*/

function candies(children: number, numOfCandy: number): number {
  if (numOfCandy < children) {
    return null;
  }

  return numOfCandy - (numOfCandy % children);
}

console.log(candies(3, 2));
console.log(candies(3, 10));
console.log(candies(5, 26));
