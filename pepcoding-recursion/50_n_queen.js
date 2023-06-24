function check_if_valid(chess, row, col) {
    // check vertically
    for (let r = row -1; r >= 0; r--) {
        if (chess[r][col]) {
            return false;
        }
    }

    for (let r = row -1, c = col + 1; r >= 0 && c < chess[0].length; r--, c++) {
        if (chess[r][c]) {
            return false;
        }
    }
    for (let r = row -1, c = col -1; r >= 0 && c >= 0; r--, c--) {
        if (chess[r][c]) {
            return false;
        }
    }
    return true;
}
function queen(chess, qsf, row) {
    //chess.length = no fo rows
    if (row === chess.length) {
        console.log(qsf, ' , ');
        return
    }
    for (let col = 0; col < chess[0].length; col++) {

        if (check_if_valid(chess, row, col)) {
            chess[row][col] = true;
            queen(chess, qsf + ' ' + row + " : " + col+ " ==> ", row + 1);
            chess[row][col] = false;
        }
    }
}
var chess = [
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
]
// console.log(check_if_valid(chess, 3, 2));
queen(chess, "", 0)