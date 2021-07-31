import sudoku from "sudoku";
import { createDefault } from "../redux/matrix/state";
import { ISquarePoint, SquareSudoky } from "../types/helpers";

export function generateSudoky() {
  const result = sudoku.solvepuzzle(sudoku.makepuzzle());
  const sud = createDefault();
  let index = 0;
  sud.forEach((i, inde) =>
    i.forEach((j, jd) => {
      sud[inde][jd] = {
        ...sud[inde][jd],
        value: result[index] === null ? "" : String(result[index] + 1),
        disabled: result[index] !== null,
      };
      index++;
    })
  );
  return sud;
}

const checkSquareForReapiating = (
  val: ISquarePoint,
  arr: SquareSudoky
): number => {
  const Xmin = [6, 3, 0];
  const Xmax = [2, 5, 8];
  const Ymin = [3, 0];
  const Ymax = [2, 5];

  const x = [
    Xmin.find((item) => item <= val.x),
    Xmax.find((item) => item >= val.x),
  ];
  const y = [
    Ymin.find((item) => item <= val.y),
    Ymax.find((item) => item >= val.y),
  ];
  if (
    typeof x[0] !== "number" ||
    typeof x[1] !== "number" ||
    typeof y[0] !== "number" ||
    typeof y[1] !== "number"
  ) {
    return 0;
  }
  let counter = 0;

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 9; j++) {
      const current = arr[i][j];
      if (
        x[0] <= current.x &&
        current.x <= x[1] &&
        current.y <= y[1] &&
        y[0] <= current.y &&
        current.value !== ""
      ) {
        if (
          current.x !== val.x &&
          current.y !== val.y &&
          current.value === val.value
        ) {
          return 2;
        }
      }
      if (counter > 1) return counter;
    }
  }
  return counter;
};

export const checkPointForCorrection = (
  mapped: SquareSudoky,
  currentPoint: ISquarePoint
): boolean => {
  const xVals = mapped.map((item) =>
    item.filter((it) => it.x === currentPoint.x && it.value !== "")
  );
  const yVals = mapped.map((item) =>
    item.filter((it) => it.y === currentPoint.y && it.value !== "")
  );
  const checkedX = checkForReapiatingByXY(currentPoint.value, xVals);
  const checkedY = checkForReapiatingByXY(currentPoint.value, yVals);
  const checkSquare = checkSquareForReapiating(currentPoint, mapped);
  return checkedX > 1 || checkedY > 1 || checkSquare > 1;
};

export const checkForReapiatingByXY = (val: string, arr: ISquarePoint[][]) => {
  let counter = 0;
  arr.forEach((el) => {
    el.forEach((elem) => {
      elem.value === val && counter++;
    });
  });
  return counter;
};
