"use strict";
// You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....

// Examples: grid(4)

// a b c d
// b c d e
// c d e f
// d e f g

// grid(10)

// a b c d e f g h i j
// b c d e f g h i j k
// c d e f g h i j k l
// d e f g h i j k l m
// e f g h i j k l m n
// f g h i j k l m n o
// g h i j k l m n o p
// h i j k l m n o p q
// i j k l m n o p q r
// j k l m n o p q r s
// Notes:
// After "z" comes "a" If function receive N < 0 should return: null

function grid(n) {
  let outerCharCounter = 65;
  let innerCharCounter = 65;
  const result = [];

  for (let i = 0; i < n; i++) {
    result[i] = [];
    innerCharCounter = outerCharCounter;
    for (let j = 0; j < n; j++) {
      if (innerCharCounter > 90) {
        innerCharCounter = 65;
      }
      const char = String.fromCharCode(innerCharCounter);
      innerCharCounter++;
      result[i].push(char);
    }
    outerCharCounter++;
    if (outerCharCounter > 90) {
      outerCharCounter = 65;
    }
  }
  return result;

  // ти маєш повернути масив масивів, а не стрінгу grid(3) --> [[a,b,c], [b,c,d], [c,d,e]]
}

console.log(grid(30));
