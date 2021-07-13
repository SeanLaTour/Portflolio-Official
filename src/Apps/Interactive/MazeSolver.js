import React from "react";

function MazeSolver() {
 null
}

export default MazeSolver;

// THE CODE:
// const path = []
// let col = 0;
// let row = 0;
// let times = -1;

// function mazeSolver(maze, col, row) {
// 	times++;
// 	if (isSolved(maze, col, row)) {
// 		return path;
// 	} else if (canMoveRight(maze, col, row)) {
// 		console.log("Right");
// 		row++;
// 		return mazeSolver(maze, col, row);
// 	} else if (canMoveDown(maze, col, row)) {
// 		console.log("Down");
// 		col++;
// 		return mazeSolver(maze, col, row);
// 	} else if (canMoveLeft(maze, col, row)) {
// 		console.log("Left");
// 		row--;
// 		return mazeSolver(maze, col, row);
// 	} else if (canMoveUp(maze, col, row)) {
// 		console.log("Up");
// 		col--;
// 		return mazeSolver(maze, col, row)
// 	}
// }

// function isSolved(maze, col, row) {
// 	if (maze[col][row] == 'e') {
// 	  console.log("Solved!");
// 	  console.log("FINISH, position: '", col, row, "'", "\n")
// 	  console.log("How to solve the maze: ", path.join())
// 	  return true;
// 	  } else {
// 		  return false;
// 	  }
// }

// function canMoveDown(maze, col, row) {
//   	col++;
// 	if (col > maze.length-1) return false;
// 	if (maze[col][row] == ' ' || maze[col][row] == 'e') {
// 		path.push('Down');
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function canMoveRight(maze, col, row) {
//   	row++;
// 	if (maze[col][row] == undefined) return false;
// 	if (maze[col][row] == ' ' || maze[col][row] == 'e') {
// 		path.push("Right");
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function canMoveLeft(maze, col, row) {
//   	row--;
// 	if (maze[col][row] == undefined) return false;
// 	if (maze[col][row] == ' ' || maze[col][row] == 'e') {
// 		path.push("Left");
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function canMoveUp(maze, col, row) {
//   	col--;
// 	if (col <= 0) return false;
// 	if (maze[col][row] == ' ' || maze[col][row] == 'e') {
// 		path.push("Up");
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
