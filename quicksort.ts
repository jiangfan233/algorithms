function quickSort(arr: number[]): number[] {
  helper(0, arr.length - 1, arr);
  return arr;
}

function helper(l: number, r: number, arr: number[]): void {
  if (l === r) return;
  if (l > r) return;
  let pivot = arr[l];
  let i = l + 1;
  let j = r;
  while(true) {
    while(i <= j && arr[i] <= pivot) i++;
    while(i <= j && arr[j] >= pivot) j--;
    if(i >= j) break;
    swap(i, j, arr);
  }
  arr[l] = arr[j];
  arr[j] = pivot;
  
  helper(l, j - 1, arr);
  helper(j + 1, r, arr);
}

function swap(l: number, r: number, arr: number[]) {
  const tmp = arr[r];
  arr[r] = arr[l];
  arr[l] = tmp;
}

const arr = [5, 6, 3, 2, 4, 4];

console.log(quickSort(arr));
