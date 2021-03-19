// Write a recursive function that finds the factorial of
// a given number. The factorial of a number can be found
// by multiplying that number by each number between itself
// and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// What is the input to the program?: Natural number > 0
// What is the output of the program?: Natural number > 0
// What is the input to each recursive call?: num - 1
// What is the output of each recursive call?: num * factorial(num - 1);

const factorial = function (num) {
  if (num === 0) {
    // Base case
    console.log(1);
    return 1;
  }
  // Recursive case
  let calc = num * factorial(num - 1);
  console.log(calc);
  return calc;
};

const input = 7;
console.log("Input: ", input);
console.log("Solution: ", factorial(input));
