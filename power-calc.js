// What is the input to the program?: (10, 2), (10, -2)
// What is the output of the program?:
//      100
//      exponent should be >= 0
// What is the input to each recursive call?:
//      base, exponent - 1
// What is the output of each recursive call?:
//      base * powerCalc(base, exponent - 1)

/*function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}*/

const powerCalc = function (base, exponent) {
  if (exponent == 1) {
    // Base case
    return base;
  } else if (exponent <= 0) {
    // Error case
    return "exponent should be >= 0";
  } else {
    // Recursive case
    return base * powerCalc(base, exponent - 1);
  }
};

console.log(powerCalc(10, 2));
//console.log(powerCalc(10, -2));
