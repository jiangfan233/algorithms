/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {

  // function go(r, c) {
  //   for (let i = 0; i < 9; i++) {
  //     for (let j = 0; j < 9; j++) {
  //       if (board[i][j] !== ".") continue;
  //       for (let num of nums) {
  //         if (check(i, j, num)) {
  //           board[i][j] = num.toString();
  //           if (go(i, j)) return true;
  //           board[i][j] = ".";
  //         }
  //         if (num === 9) return false;
  //       }
  //     }
  //   }
  //   return true;
  // }

  let rowUsed = Array(9),
    colUsed = Array(9),
    matrixUsed = Array(9);
  for (let i = 0; i < 9; i++) {
    let rtmp = {},
      ctmp = {};
    for (let j = 0; j < 9; j++) {
      const n = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (!matrixUsed[n]) matrixUsed[n] = {};
      if (board[i][j] !== ".") {
        rtmp[board[i][j]] = true;
        matrixUsed[n][board[i][j]] = true;
      }
      if (board[j][i] !== ".") {
        ctmp[board[j][i]] = true;
      }
    }
    rowUsed[i] = rtmp;
    colUsed[i] = ctmp;
  }

  function go(r, c) {
    if (r >= 8 && c >= 9) return true;
    if (c >= 9) {
      r += 1;
      c %= 9;
    }
    if (board[r][c] !== ".") {
      return go(r, c + 1);
    }

    for (let k = 1; k <= 9; k++) {
      const n = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (
        !rowUsed[r][k] &&
        !colUsed[c][k] &&
        !matrixUsed[n][k]
      ) {
        board[r][c] = k.toString();
        rowUsed[r][k] = true;
        colUsed[c][k] = true;
        matrixUsed[n][k] = true;
        if (go(r, c + 1)) return true;
        board[r][c] = ".";
        rowUsed[r][k] = false;
        colUsed[c][k] = false;
        matrixUsed[n][k] = false;
      }
    }
    return false;
  }

  go(0, 0);
  return board;
};
// @lc code=end

console.log(
  solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
