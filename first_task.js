"use strict";

// Dot Calculator You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

// Here are the following valid operators :

// Addition
// Subtraction
// Multiplication // Integer Division Your Work (Task) You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
// Examples (Input => Output)

// calculate("..... + ...............") => "...................."
// calculate("..... - ...") => ".."
// calculate("..... - .") => "...."
// calculate("..... * ...") => "..............."
// calculate("..... * ..") => ".........."
// calculate("..... // ..") => ".."
// calculate("..... // .") => "....."
// calculate(". // ..") => ""
// calculate(".. - ..") => ""

function calculate(string) {
  const array = string.split(" ");
  let result = 0;
  const firstOperand = array[0].length;
  const secondOperand = array[2].length;
  const operator = array[1];

  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      if (firstOperand >= secondOperand) {
        result = firstOperand - secondOperand;
      } else {
        console.error(
          "First operand must be greater than or equal to the second operand"
        );
      }
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "//":
      result = Math.floor(firstOperand / secondOperand);
      break;
    default:
      console.error("incorrect operator");
      break;
  }

  let resultStr = "";
  for (let i = 0; i < result; i++) {
    resultStr += ".";
  }
  return resultStr;
}

calculate("..... + ..............."); // => "...................."
calculate("..... - ..."); // => ".."
calculate("..... - ."); // => "...."
calculate("..... * ..."); //  => "..............."
calculate("..... * .."); // => ".........."
calculate("..... // .."); // => ".."
calculate("..... // ."); // => "....."
calculate(". // .."); //  => ""
calculate(".. - .."); // => ""
