/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let rr = board.length,
    cc = board[0].length,
    memo = Array(rr)
      .fill(0)
      .map((_) => Array(cc).fill(false));

  const search = (r, c, idx) => {
    if (idx >= word.length) return true;
    if (r < 0 || r >= rr || c < 0 || c >= cc) return false;
    if (memo[r][c] || board[r][c] !== word[idx]) return false;

    memo[r][c] = true;
    // board[r][c] = "";

    if (
      search(r, c + 1, idx + 1) ||
      search(r - 1, c, idx + 1) ||
      search(r, c - 1, idx + 1) ||
      search(r + 1, c, idx + 1)
    )
      return true;

    memo[r][c] = false;
    // board[r][c] = word[idx];
    return false;
  };
  for (let i = 0; i < rr; i++) {
    for (let j = 0; j < cc; j++) {
      if (board[i][j] === word[0]) {
        if (search(i, j, 0)) return true;
      }
    }
  }
  return false;
};

// @lc code=end

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCC"
  )
);
