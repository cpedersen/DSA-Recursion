// What is the input to the program?: 3
// What is the output of the program?:
//    3 Another sheep jumped
//    2 Another sheep jumped
//    1 Another sheep jumped
//    All sheep jumped over the fence
// What is the input to each recursive call?: num
// What is the output of each recursive call?:
//     return countSheep(num)

const countSheep = function (num) {
  // Base case
  if (num === 0) {
    return "All sheep jumped over the fence";
  } else {
    console.log(`${num} sheep jumped over the fence`);
    num--;
    return countSheep(num);
  }
};

console.log(countSheep(3));
