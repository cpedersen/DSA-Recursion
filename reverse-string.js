// Write a function that reverses a string.
// Take a string as input, reverse the string,
// and return the new string.

// What is the input to the program?: string
// What is the output of the program?: new string
// What is the input to each recursive call?: substring starting
// at char 1 (with char 0 removed)
// What is the output of each recursive call?:
//recursionReverse('hello')
//(recursionReverse('ello') + 'h')
//((recursionReverse('llo') + 'e') + 'h')
//(((recursionReverse('lo') + 'l') + 'e') + 'h')
//((((recursionReverse('o') + 'l') + 'l' ) + 'e') + 'h')
//(((('o') + 'l') + 'l' ) + 'e') + 'h')

const reverseString = function (string) {
  if (string === "") {
    // Base case
    return "";
  } else {
    // Recursive case
    // (New string is returned and saved to string)
    return reverseString(string.substr(1)) + string.charAt(0);
  }
};

console.log(reverseString("hello"));
