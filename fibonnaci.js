// Write a recursive function that prints the Fibonacci
// sequence of a given number. The Fibonacci sequence is
// a series of numbers in which each number is the sum
// of the 2 preceding numbers. For example, the 7th
// Fibonacci number in a Fibonacci sequence is 13. The
// sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

// What is the input to the program?: natural number
// What is the output of the program?: Fibonacci sequence
// up until this number
// What is the input to each recursive call?: number minus one
// What is the output of each recursive call?: Example 4:
// 1, 1
// 1, 1, 2
// 1, 1, 2, 3
// 4: 1, 1, 2, 3

const fibonacci = function (number) {
  if (number === 1) {
    console.log("1");
    return "1";
  } else if (number === 2) {
    console.log("1, 1");
    return "1, 1";
  } else {
    const fib = fibonacci(number - 1);
    const [a, b] = fib.split(", ").slice(-2);
    const value = Number(a) + Number(b);
    console.log(fib + ", " + value);
    return fib + ", " + value;
  }
};

//console.log("1:", fibonacci(1));
//console.log("2:", fibonacci(2));
//console.log("3:", fibonacci(3));
console.log("4:", fibonacci(4));
//console.log("7:", fibonacci(7));
