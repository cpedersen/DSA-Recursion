// Write a recursive function that prints the following
// organization chart. Your output should be as shown
// below with proper indentation to show the hierarchy.
// ou may store the org chart in an object and send that
// as an input to your program.

// What is the input to the program?:
// What is the output of the program?:
// What is the input to each recursive call?:
// What is the output of each recursive call?:

const printOrgChart = function (org, indent = 0) {
  for (let key in org) {
    console.log(" ".repeat(indent), key);

    // Recursive case
    printOrgChart(org[key], indent + 4);
  }
};

const organization = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {},
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {},
      },
      Badros: {
        John: {},
        Mike: {},
        Pat: {},
      },
      Parikh: {
        Zach: {},
        Ryan: {},
        Tes: {},
      },
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {},
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {},
      },
      Frankovsky: {
        Jasee: {},
        Brian: {},
        Margaret: {},
      },
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {},
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {},
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {},
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {},
      },
    },
  },
};

console.log(printOrgChart(organization, (indent = 0)));
