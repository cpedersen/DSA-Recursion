// Write a function called powerCalculator() that takes
// two parameters, an integer as a base, and another integer
// as an exponent. The function returns the value of the base
// raised to the power of the exponent. Use only exponents
// greater than or equal to 0 (positive numbers)

// What is the input to the program?: Positive integers for base
// and exponent
// What is the output of the program?: Positive integer
// What is the input to each recursive call?:
//      base, exponent - 1
// What is the output of each recursive call?:
//      base * powerCalc(base, exponent - 1);
// Base:  10
// Exponent:  3
// 1
// 100
// 1000
// Solution:  1000

const powerCalc = function (base, exponent) {
  if (exponent == 1) {
    // Base case
    console.log(1);
    return base;
  } else if (exponent <= 0) {
    // Error case
    return "exponent should be >= 0";
  } else {
    // Recursive case
    let sum = base * powerCalc(base, exponent - 1);
    console.log(sum);
    return sum;
  }
};

const base = 10;
const exponent = 3;
console.log("Base: ", base);
console.log("Exponent: ", exponent);
console.log("Solution: ", powerCalc(base, exponent));
//console.log(powerCalc(10, -2));
