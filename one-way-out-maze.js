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

// What is the input to the program?: num X axis, num Y axis
// What is the output of the program?: Characters indicating
// Left (L), Right (R), Up (U), Down (D).
// What is the input to each recursive call?:
// What is the output of each recursive call?:

const oneWayOutMaze = function (maze, x = 0, y = 0, plotPoints = "") {
  if (maze[x] && maze[x][y] && maze[x][y] === "e") {
    return plotPoints;
  }

  if (!maze[x] || !maze[x][y] || maze[x][y] === "*" || maze[x][y] === "+") {
    return false;
  }

  maze[x][y] = "+";
  oneWayOutMaze(maze, x + 1, y, "R" + plotPoints);
  oneWayOutMaze(maze, x - 1, y, "L" + plotPoints);
  oneWayOutMaze(maze, x, y + 1, "D" + plotPoints);
  oneWayOutMaze(maze, x, y - 1, "U" + plotPoints);
  console.log("plotPoints: ", plotPoints);
};

const x = 3;
const y = 3;
const plotPoints = x * y;
const maze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];
console.log("x: ", y);
console.log("y: ", y);
console.log("maze: ", maze);
console.log("plotPoints: ", plotPoints);
console.log("Solution: ", oneWayOutMaze(maze));

/* 
const oneWayOutMaze = function (maze, x = 0, y = 0, plotPoints = "") {
  if (maze[x] && maze[x][y] && maze[x][y] === "e") {
    return plotPoints;
  }

  if (!maze[x] || !maze[x][y] || maze[x][y] === "*" || maze[x][y] === "+") {
    return false;
  }

  maze[x][y] = "+";
  oneWayOutMaze(maze, x + 1, y, "R" + plotPoints);
  oneWayOutMaze(maze, x - 1, y, "L" + plotPoints);
  oneWayOutMaze(maze, x, y + 1, "D" + plotPoints);
  oneWayOutMaze(maze, x, y - 1, "U" + plotPoints);
  console.log("plotPoints: ", plotPoints);
};
*/
