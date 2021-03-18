// You have entered a Maze and need to find your way
// out of it. There are more than one possible paths
// through the Maze to the single exit point. Write a
// recursive function that will help you find a possible
// path through the maze.

// You can use the following mazes to test your program.

/* let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];*/

/* let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
*/

// Solution for above: RRDDLLDDRRRRRR

// The Maze is represented as a N*M matrix (in the above case, a 3X3
// or a 5X7 array). The starting point is the top left corner and
// the exit is indicated by e. For simplicity purpose, use the bottom
// right corner of the maze as the exit. You can't go outside the
// boundaries of the maze. The maze has passages that are blocked
// and you can't go through them. These blocked passages are indicated
// by *. Passing through a blocked cell as well as passing though a
// cell that you have already passed before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR

// What is the input to the program?: path, maze
// What is the output of the program?: Characters indicating
// Left (L), Right (R), Up (U), Down (D).
// What is the input to each recursive call?: x, y, path, maze
// What is the output of each recursive call?:
// path = "R" + navigateMaze(newX, newY, path, maze)

const navigateMaze = function (x, y, path, maze) {
  if (maze[x][y] == "e") {
    // Base Case
    return path;
  }

  // All of the rest are recursive cases...

  // Move Right
  if (y < maze[0].length - 1 && maze[x][y + 1] != "*") {
    maze[x][y] = "*";
    let newY = y + 1;
    let newX = x;
    return (path = "R" + navigateMaze(newX, newY, path, maze));
  }

  // Move Down
  if (x < maze.length - 1 && maze[x + 1][y] != "*") {
    maze[x][y] = "*";
    let newY = y;
    let newX = x + 1;
    return (path = "D" + navigateMaze(newX, newY, path, maze));
  }

  // Move Left
  if (y > 0 && maze[x][y - 1] != "*") {
    maze[x][y] = "*";
    let newY = y - 1;
    let newX = x;
    return (path = "L" + navigateMaze(newX, newY, path, maze));
  }

  // Move Up
  if (x > 0 && maze[x - 1][y] != "*") {
    maze[x][y] = "*";
    let newY = y;
    let newX = x - 1;
    return (path = "U" + navigateMaze(newX, newY, path, maze));
  }
};

const x = 0;
const y = 0;
const path = "";
/*const maze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];*/

let maze = [
  [" ", " ", " ", "*", " ", " ", " "],
  ["*", "*", " ", "*", " ", "*", " "],
  [" ", " ", " ", " ", " ", " ", " "],
  [" ", "*", "*", "*", "*", "*", " "],
  [" ", " ", " ", " ", " ", " ", "e"],
];

console.log("maze: ", maze);
console.log("Solution: ", navigateMaze(x, y, path, maze));
