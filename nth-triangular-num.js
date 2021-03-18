// Calculate the nth triangular number.

// A triangular number counts the objects that can
// form an equilateral triangle. The nth triangular number
// is the number of dots composing a triangle with n dots
// on a side, and is equal to the sum of the n natural numbers
// from 1 to n. This is the Triangular Number Sequence:
// 1, 3, 6, 10, 15, 21, 28, 36, 45.

// What is the input to the program?: sequence number
// What is the output of the program?: count of objects
// that make up the triangle
// What is the input to each recursive call?: sequence number minus 1
// What is the output of each recursive call?:
// sequence num 1: 1
// sequence num 2: 3 (1 + 2)
// sequence num 3: 6 (1 + 2 + 3)
// sequence num 4: 10 (1 + 2 + 3 + 4)

const nthTriangularNum = function (num) {
  if (num <= 1) {
    // Base case
    return num;
  } else {
    // Recursive case
    console.log("------------------------------");
    console.log("num: ", num);
    console.log("call function: ", nthTriangularNum(num - 1));
    console.log("total: ", num + nthTriangularNum(num - 1));
    return num + nthTriangularNum(num - 1);
  }
};

console.log(nthTriangularNum(2));
