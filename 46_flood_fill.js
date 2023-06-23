


function getFllodFill(maze, row, col, asf, visited) {

    if (row < 0 || col < 0 || row === maze.length || col === maze[0].length || maze[row][col] === 1 || visited[row][col]) {
        return
    }

    if (row === maze.length - 1 && col === maze[0].length - 1) {
        console.log(asf);
        return
    }

    visited[row][col] = true
    getFllodFill(maze, row - 1, col, asf + "T", visited)
    getFllodFill(maze, row, col - 1, asf + " - L", visited)
    getFllodFill(maze, row + 1, col, asf + " - D", visited)
    getFllodFill(maze, row, col + 1, asf + " - R", visited)

    visited[row][col] = false

}

var maze = [
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0]
]

var visited = [
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false]
  ]
  
getFllodFill(maze, 0, 0, '', visited)


 


function getFllodFill(maze, row, col, asf, visited) {
    if (row < 0 || col < 0 || row === maze.length || col === maze[0].length || maze[row][col] === 1 || visited[row][col]) {
        return
    }

    if (row === maze.length - 1 && col === maze[0].length - 1) {
        console.log(asf);
        return
    }
    visited[row][col] = true
    getFllodFill(maze, row - 1, col, asf + "T", visited)
    getFllodFill(maze, row, col - 1, asf + " - L", visited)
    getFllodFill(maze, row + 1, col, asf + " - D", visited)
    getFllodFill(maze, row, col + 1, asf + " - R", visited)
    visited[row][col] = false

}

var maze = [
    [0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 0]
]
var visited = [
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false]
  ]
  
getFllodFill(maze, 0, 0, '', visited)


 