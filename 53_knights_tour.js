

// function knights(ary, row, col, move) {

//     if (row < 0 || col < 0 || row >= ary.length || col >= ary.length || ary[row][col] > 0) {
//         return;
//     } else if (move === ary.length * ary.length) {
//         ary[row][col] = move
//         console.log(ary); 
//         return
//     }

//     ary[row][col] = move
//     knights(ary, row - 2, col + 1, move + 1);
//     knights(ary, row - 1, col + 2, move + 1);
//     knights(ary, row + 1, col + 2, move + 1);
//     knights(ary, row + 2, col + 1, move + 1);

//     knights(ary, row + 2, col - 1, move + 1);
//     knights(ary, row + 1, col - 2, move + 1);
//     knights(ary, row - 1, col - 2, move + 1);
//     knights(ary, row - 2, col - 1, move + 1);

//     ary[row][col] = 0
// }

// var ary = [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0]
// ]
// console.log(knights(ary, 2, 3, 1));

function knights(ary, row, col, move) {
    if (row < 0 || col < 0 || row >= ary.length || col >= ary.length || ary[row][col] > 0) {
        return;
    } else if (move === ary.length * ary.length) {
        ary[row][col] = move;
        console.log(ary);
        ary[row][col] = 0;
        return;
    }

    ary[row][col] = move;
    knights(ary, row - 2, col + 1, move + 1);
    knights(ary, row - 1, col + 2, move + 1);
    knights(ary, row + 1, col + 2, move + 1);
    knights(ary, row + 2, col + 1, move + 1);
    knights(ary, row + 2, col - 1, move + 1);
    knights(ary, row + 1, col - 2, move + 1);
    knights(ary, row - 1, col - 2, move + 1);
    knights(ary, row - 2, col - 1, move + 1);
    ary[row][col] = 0;
}

var ary = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

knights(ary, 2, 3, 1);

