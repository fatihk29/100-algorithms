## 100 Algorithms Exercises using TypeScript

## VSCode extensions

Quokka.js

- F1
- quokka.js: Start on Current File

## inspired by

https://github.com/PizzaPokerGuy/100AlgorithmsChallenge

### some interview questions

- == vs ===

  Double equals is comparing just the value while
  triple equals is comparing both the value and the type

- Closure

  It essentially is a function calling a function within.
  So you will have a parent function that will have a child function.
  you can instantiate a variable on your first function.
  Then your return function will have access to it.

- Lexical vs Block Scope

  var is the traditional way which has sort of been deprecated with the addition of constant and let
  that uses lexical scope. Lexical scope is really refers to variable hoisting

- use strict

  Compiler will apply stricter rules.
  The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
  In strict mode, any assignment to a non-writable property, a getter-only property,
  a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

- delete

  delete allows us to completely remove an element from a an array.
  It also can delete a property off of an object.

  ```js
  const ourObject = {
    property1: "1",
    property2: "2",
  };

  delete ourObject.property1;
  console.log(ourObject); // false

  const array1 = [1, 2, 3, 4, 5, 6];

  delete array1[1];
  console.log(array1); // [1, , 3, 4, 5, 6];
  // delete did not change its indexing
  ```

- this

  This refers to the context of what we are working on
