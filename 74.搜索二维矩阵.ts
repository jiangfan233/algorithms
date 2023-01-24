/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  const r = matrix.length;
  const c = matrix[0].length;
  if (target < matrix[0][0] || target > matrix[r - 1][c - 1]) return false;

  // exact: 是否精确搜索
  const search = (arr: number[], l: number, r: number, exact: boolean): number => {
    if (l > r) {
      return exact ? -1 : arr[l] > target ? l : l + 1;
    }
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
    return search(arr, l, r, exact);
  }

  const lastNums = matrix.map(row => row[c - 1]);
  const rr = search(lastNums, 0, r - 1, false);
  if (rr === -1) return false;
  return search(matrix[rr], 0, c - 1, true) >= 0;

};
// @lc code=end

console.log(searchMatrix([[-8, -7, -5, -3, -3, -1, 1], [2, 2, 2, 3, 3, 5, 7], [8, 9, 11, 11, 13, 15, 17], [18, 18, 18, 20, 20, 20, 21], [23, 24, 26, 26, 26, 27, 27], [28, 29, 29, 30, 32, 32, 34]], -5))

