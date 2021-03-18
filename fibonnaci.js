// Write a recursive function that prints the Fibonacci
// sequence of a given number. The Fibonacci sequence is
// a series of numbers in which each number is the sum
// of the 2 preceding numbers. For example, the 7th
// Fibonacci number in a Fibonacci sequence is 13. The
// sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

// What is the input to the program?:
// What is the output of the program?:
// What is the input to each recursive call?:
// What is the output of each recursive call?:

const fibonacci = function (number) {
  if (number === 1) {
    return "1";
  } else if (number === 2) {
    return "1, 1";
  } else {
    const fib = fibonacci(number - 1);

    const [a, b] = fib.split(", ").slice(-2);
    const value = Number(a) + Number(b);

    return fib + ", " + value;
  }
};

console.log("1:", fibonacci(1));
console.log("2:", fibonacci(2));
console.log("3:", fibonacci(3));
console.log("4:", fibonacci(4));
console.log("7:", fibonacci(7));
