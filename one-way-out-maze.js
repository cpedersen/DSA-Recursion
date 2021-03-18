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

/* EFFORT 1
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

const num = 3;
const maze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];
console.log("Maze: ", maze);
console.log("Solution: ", oneWayOutMaze(maze));
*/

/* EFFORT 2
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

// EFFORT 3
/*const oneWayOutMaze = function (maze, num) {
  this.maze = maze;
  let path = "";
  function navigate(column, row) {
    if (this.maze[column][row] == 2) {
      console.log("We solved the maze at (" + column + ", " + row + ")");
    } else if (this.maze[column][row] == 1) {
      console.log("At valid position (" + column + ", " + row + ")");
      this.maze[column][row] = num;

      // Right
      if (column < this.maze.length - 1) {
        navigate(column + 1, row);
        path.concat("R");
      }

      // Down
      if (row < this.maze[column].length - 1) {
        navigate(column, row + 1);
        path.concat("D");
      }

      // Left
      if (column > 0) {
        navigate(column - 1, row);
        path.concat("L");
      }

      // Up
      if (row > 0) {
        navigate(column, row - 1);
        path.concat("U");
      }
    }
  }
};

console.log("Number of rows and columns: ", num);
console.log("Maze: ", maze);
console.log("Solution: ", oneWayOutMaze(maze, num));
*/

// EFFORT 4
/*const oneWayOutMaze = function (map, x, y) {
  if (x < 0 || x > map[0].length - 1 || y < 0 || y > map.length - 1)
    return false; //if it is outside of map
  if (map[y][x] == 0) return false; //it is not open

  if (x == goalx && y == goaly) {
    console.log("Reached goal at: " + x + ":" + y);
    return true; // if it is the goal (exit point)
  }

  if (map[y][x] == 9 || map[y][x] == 8) return false;

  console.log("Im here at: " + x + ":" + y);

  map[y][x] = 9; //here marking x,y position as part of solution path outlined by "9"

  if (findpath(x + 1, y)) return true;
  if (findpath(x, y + 1)) return true;
  if (findpath(x, y - 1)) return true;
  if (findpath(x - 1, y)) return true;

  return false;
};

const x = 2;
const y = 2;
const maze = [
  [" ", " ", " "],
  [" ", "*", " "],
  [" ", " ", "e"],
];
console.log("Maze: ", maze);
console.log("Solution: ", oneWayOutMaze(maze, x, y));
*/
