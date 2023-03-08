/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// @lc code=start
function isValidSudoku(board: string[][]): boolean {
    type Obj = {
        [index: string]: boolean
    }
    const rows: Obj[] = [];
    const cols: Obj[] = [];
    const squares: Obj[] = [];
    // for (let i = 0; i < 9; i++) {
    //     const row = rows[i]
    //     for (let j = 0; j < 9; j++) {
    //         const item = board[i][j];
    //         if (item === ".") continue;

    //         if (row[item]) return false;
    //         row[item] = true;

    //         const col = cols[j];
    //         if (col[item]) return false;
    //         col[item] = true;

    //         const square = squares[Math.trunc(i / 3) * 3 + Math.trunc(j / 3)];
    //         if (square[item]) return false;
    //         square[item] = true;

    //     }
    // }

    for (let i = 0; i < 81; i++) {
        const r = Math.floor(i / 9);
        const c = i % 9;
        const item = board[r][c];
        if (item === ".") continue;

        const tmp = Math.trunc(r / 3) * 3 + Math.trunc(c / 3);

        if(rows[r] === undefined) rows[r] = {};
        if(cols[c] === undefined) cols[c] = {};
        if(squares[tmp] === undefined) squares[tmp] = {};

        if (rows[r][item]
            || cols[c][item]
            || squares[tmp][item])
            return false;
        
        rows[r][item] = true;
        cols[c][item] = true;
        squares[tmp][item] = true; 
    }

    return true;

};
// @lc code=end

isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
])
