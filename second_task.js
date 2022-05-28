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
  let charCount = 65;
  let rowCount = 0;
  let string = "";
  for (let i = 0; i < n * n; i++) {
    const char = String.fromCharCode(charCount);
    string += char;
    rowCount++;
    charCount++;
    if (rowCount >= n) {
      string += "\n";
      rowCount = 0;
    }
    if (charCount > 90) {
      charCount = 65;
    }
  }
  // ти маєш повернути масив масивів, а не стрінгу grid(3) --> [[a,b,c], [b,c,d], [c,d,e]]
  return string;
}

console.log(grid(122));
