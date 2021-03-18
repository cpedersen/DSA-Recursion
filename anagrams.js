// An anagram is any word or phrase that uses the letters
// of a given ("subject") word or phrase in another,
// rearranged order. Write a function that creates an
// anagram list, listing all the rearrangements of a given
// word. For example, if the user types "east", the program
// should list all 24 permutations, including "eats", "etas",
// "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a
// prefix and use that to create the new words. For example,
// given "east", use "e" as a prefix and place it in front of
// all 6 permutations of "ast" — "ast", "ats", "sat", "sta",
// "tas", and "tsa". This will give you the words "east",
// "eats", "esat", "esta", "etas", and "etsa". Continue this
// way until you find all the anagrams for "east". Then you
// can use "a" as a prefix and permute the remaining words
// "est". For "east", there should be 24 words.

// What is the input to the program?: string
// What is the output of the program?: list of strings
// What is the input to each recursive call?: string
// What is the output of each recursive call?:
// result.concat(substrings.map((substring) => first + substring))
// Solution: [
//  'math', 'maht', 'mtah',
//  'mtha', 'mhat', 'mhta',
//  'amth', 'amht', 'atmh',
//  'athm', 'ahmt', 'ahtm',
//  'tmah', 'tmha', 'tamh',
//  'tahm', 'thma', 'tham',
//  'hmat', 'hmta', 'hamt',
//  'hatm', 'htma', 'htam'
// ]

const anagrams = function (string) {
  // Base case
  if (string.length === 1) return [string];
  let result = [];

  for (let i = 0; i < string.length; i++) {
    let first = string[i];
    let rest = string.substring(0, i) + string.substring(i + 1);

    let substrings = anagrams(rest);
    // Recursion
    result = result.concat(substrings.map((substring) => first + substring));
  }

  console.log("Number anagrams found: ", result.length);
  return result;
};

const string = "math";
console.log("string: ", string);
console.log("Solution:", anagrams(string));
