import { createDefault, defaultStateSudoky } from "../redux/matrix/state";

function shuffle(arr: number[]) {
  const ret = [];
  while (ret.length < arr.length) {
    const x = arr[Math.floor(Number(Math.random() * arr.length))];
    if (!(ret.indexOf(x) >= 0)) ret.push(x);
  }
  return ret;
}

export default function getSudoku() {
  const sudoku: number[][] = [];
  const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  sudoku.push(arr);
  for (let i = 1; i < 9; i++) {
    while (sudoku.length <= i) {
      const newarr = shuffle(arr);
      let b = false;
      for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < i; k++) {
          if (sudoku[k].indexOf(newarr[j]) == j) b = true;
        }
      }
      if (!b) {
        sudoku.push(newarr);
      }
    }
  }
  return sudoku;
}

export function regenerateSudoky(sudoky: number[][]) {
  const sudokyState = createDefault();
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 9; i++) {}
  }
}
