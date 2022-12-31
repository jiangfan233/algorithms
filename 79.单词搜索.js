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
    idx = 0;

  const getTop = (r, c) => {
    return r - 1 < 0 ? null : board[r - 1][c];
  };
  const getDown = (r, c) => {
    return r + 1 > rr - 1 ? null : board[r + 1][c];
  };
  const getLeft = (r, c) => {
    return c - 1 < 0 ? null : board[r][c - 1];
  };
  const getRight = (r, c) => {
    return c + 1 > cc - 1 ? null : board[r][c + 1];
  };

  const setNull = (r, c, d) => {
    switch (d) {
      case "left":
        board[r][c - 1] = null;
        break;
      case "right":
        board[r][c + 1] = null;
        break;
      case "top":
        board[r - 1][c] = null;
        break;
      case "down":
        board[r + 1][c] = null;
        break;
      default:
        board[r][c] = null;
    }
  };

  const search = (r, c, idx, forBid) => {
    // const curr = queue.shift();
    console.log(r, c, board[r][c], word[idx]);
    if (idx >= word.length) return true;
    let a1 = false,
      a2 = false,
      a3 = false,
      a4 = false;
    if (forBid !== "left" && getLeft(r, c) === word[idx]) {
      a1 = search(r, c - 1, idx + 1, "right");
    }
    if (forBid !== "right" && getRight(r, c) === word[idx]) {
      a2 = search(r, c + 1, idx + 1, "left");
    }
    if (forBid !== "top" && getTop(r, c) === word[idx]) {
      a3 = search(r - 1, c, idx + 1, "down");
    }
    if (forBid !== "down" && getDown(r, c) === word[idx]) {
      a4 = search(r + 1, c, idx + 1, "top");
    }

    return a1 || a2 || a3 || a4;
  };

  for (let r = 0; r < rr; r++) {
    for (let c = 0; c < cc; c++) {
      if (board[r][c] === word[idx]) {
        // queue.push({r, c});
        const ans = search(r, c, idx + 1, null);
        // console.log("ans", ans)
        if (ans) return ans;
      }
    }
  }
  return false;
};
// @lc code=end

console.log(
  exist(
    [
      ["C", "A", "A"],
      ["A", "A", "A"],
      ["B", "C", "D"],
    ],
    "AAB"
  )
);
