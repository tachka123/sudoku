import { ISquarePoint, SquareSudoky, ThunkResult } from "../../types/helpers";
import { setMatrixAction } from "../matrix";
import { createDefault } from "../matrix/state";
import sudoku from "sudoku";

export function setSquarePointThunk(
  squarePoint: ISquarePoint,
  squareIndex: number,
  littleSquareIndex: number
): ThunkResult<void> {
  return (dispatchEvent, getState) => {
    const { sudoky } = getState();
    const mapped: SquareSudoky = [...sudoky];
    mapped[squareIndex][littleSquareIndex] = squarePoint;
    const updated: SquareSudoky = [...mapped];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 9; j++) {
        const isIncorrect = checkPointForCorrection(updated, updated[i][j]);
        if (isIncorrect) {
          updated[i][j] = { ...updated[i][j], correct: false };
        } else {
          updated[i][j] = { ...updated[i][j], correct: true };
        }
      }
    }
    dispatchEvent(setMatrixAction(updated));
    dispatchEvent(checkForCompletedSudoku());
  };
}

const checkPointForCorrection = (
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

const checkForReapiatingByXY = (val: string, arr: ISquarePoint[][]) => {
  let counter = 0;
  arr.forEach((el) => {
    el.forEach((elem) => {
      elem.value === val && counter++;
    });
  });
  return counter;
};

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
          counter = 2;
        }
      }
      if (counter > 1) return counter;
    }
  }
  return counter;
};

function checkForCompletedSudoku(): ThunkResult<void> {
  return (dispatchEvent, getState) => {
    const { sudoky } = getState();
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 9; j++) {
        if (sudoky[i][j].value === "" || !sudoky[i][j].correct) {
          return;
        }
      }
    }
    alert("Succesfully completed!");
  };
}

export function generateMatrixByComplexity(
  cbOnComplete: () => void
): ThunkResult<void> {
  return (dispatch) => {
    const mapped = generateSudoky();
    dispatch(setMatrixAction(mapped));
    cbOnComplete();
    alert("Have fun!");
  };
}

export function generateSudoky() {
  const result = sudoku.makepuzzle();
  const sud = createDefault();
  let index = 0;
  sud.forEach((i, inde) =>
    i.forEach((j, jd) => {
      sud[inde][jd] = {
        ...sud[inde][jd],
        value: result[index] === null ? "" : result[index],
        disabled: result[index] !== null,
      };
      index++;
    })
  );
  return sud;
}
