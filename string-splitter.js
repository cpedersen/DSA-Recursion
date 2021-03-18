// Write a recursive function that splits a string based on a
// separator (similar to String.prototype.split). Don't use
// JS array's split function to solve this problem.
// Input: 02/20/2020
// Output: ["02", "20", "2020"]

// What is the input to the program?: 02/20/2020
// What is the output of the program?: ["02", "20", "2020"]
// What is the input to each recursive call?: rest of the string,
// character to split on
// What is the output of each recursive call?:
// [ '20' ]
// [ '020' ]
// [ '2020' ]
// [ '', '2020' ]
// [ '0', '2020' ]
// [ '20', '2020' ]
// [ '', '20', '2020' ]
// [ '2', '20', '2020' ]
// [ '02', '20', '2020' ]

const stringSplitter = function (string, char) {
  let testChar = string[0];
  const rest = string.slice(1);

  // Ignore this char
  if (testChar === char) {
    testChar = "";
  }

  if (rest.length === 0) {
    return [testChar];
  } else {
    const split = stringSplitter(rest, char);

    // Split here, new string, spread other elements to the end
    if (testChar === "") {
      split.unshift("");
      console.log(split);
      return split;
    } else {
      const current = split[0];
      const rest = split.slice(1);
      console.log([testChar + current, ...rest]);
      return [testChar + current, ...rest];
    }
  }
};

let input = "1/2/3";
console.log(input, "=>", stringSplitter(input, "/")); //

input = "02/20/2020";
console.log(input, "=>", stringSplitter(input, "/"));
