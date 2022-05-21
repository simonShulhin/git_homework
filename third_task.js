"use strict";
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints
// 0 <= input.length <= 100

function checkParentheses(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    const bracket = string[i];
    if (bracket === "(") {
      counter++;
    } else if (bracket === ")") {
      counter--;
    }
    if (counter < 0) {
      return false;
    }
  }
  return counter === 0;
}

checkParentheses("()"); //=>true
checkParentheses(")(()))"); //=>  false
checkParentheses("("); //=>false
checkParentheses("(())((()())())"); //=>  true
