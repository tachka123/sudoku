import {
  ISquarePoint,
  LittleSquare,
  SquareSudoky,
  ThunkResult,
} from "../../types/helpers";
import getSudoku from "../../utils";
import { setMatrixAction } from "../matrix";
import {
  countLittleSquare,
  countSquare,
  countX,
  countXandY,
  countY,
  createDefault,
} from "../matrix/state";

export function setSquarePointThunk(
  squarePoint: ISquarePoint,
  squareIndex: number,
  littleSquareIndex: number
): ThunkResult<void> {
  return (dispatchEvent, getState) => {
    const { sudoky } = getState();
    const mapped: SquareSudoky = [...sudoky];
    mapped[squareIndex][littleSquareIndex] = squarePoint;
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 9; j++) {
        const isIncorrect = checkPointForCorrection(mapped, mapped[i][j], i);
        if (isIncorrect) {
          mapped[i][j] = { ...mapped[i][j], correct: false };
        } else {
          mapped[i][j] = { ...mapped[i][j], correct: true };
        }
      }
    }
    dispatchEvent(setMatrixAction(mapped));
    dispatchEvent(checkForCompletedSudoku());
  };
}

const checkPointForCorrection = (
  mapped: SquareSudoky,
  currentPoint: ISquarePoint,
  squareIndex: number
): boolean => {
  const xVals = mapped.map((item) =>
    item.filter((it) => it.x === currentPoint.x && it.value !== "")
  );
  const yVals = mapped.map((item) =>
    item.filter((it) => it.y === currentPoint.y && it.value !== "")
  );
  const checkedX = checkForReapiatingByXY(currentPoint.value, xVals);
  const checkedY = checkForReapiatingByXY(currentPoint.value, yVals);
  const checkSquare = checkSquareForReapiating(
    currentPoint.value,
    mapped[squareIndex]
  );
  return checkedX > 1 || checkedY > 1 || checkSquare > 1;
};

const checkForReapiatingByXY = (val: string, arr: ISquarePoint[][]) => {
  let counter = 0;
  arr.forEach((el) => el.forEach((elem) => elem.value === val && counter++));
  return counter;
};

const checkSquareForReapiating = (val: string, arr: LittleSquare) => {
  let counter = 0;
  arr.forEach((el) => el.value === val && val !== "" && counter++);
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
  return (dispatch, getState) => {
    const randomize = Math.random() > 0.5 ? -1 : 1;
    const { complexity } = getState();
    const mapped: SquareSudoky = createDefault();
    const generatedSudoku = getSudoku();
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 9; j++) {
        const xy = countXandY(i, j);
        const square = countSquare(j, i);
        const littleSquare = countLittleSquare(j, i, square);
        console.log(square, littleSquare);
        mapped[i][j] = {
          correct: true,
          value: String(generatedSudoku[i][j]),
          x: xy[0],
          y: xy[1],
          disabled: false,
        };
      }
    }
    dispatch(setMatrixAction(mapped));
    // dispatch(autoFillMatrix());
    cbOnComplete();
    alert("Have fun!");
  };
}

export function autoFillMatrix(): ThunkResult<void> {
  return (dispatchEvent, getstate) => {
    const { sudoky } = getstate();
    const mapped: SquareSudoky = [...sudoky];
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 9; j++) {
        let isPossible = false;
        let generatedNum = 1;
        const x = countX(i, j);
        const y = countY(i, j);
        while (!isPossible) {
          const point: ISquarePoint = {
            correct: true,
            disabled: true,
            value: String(generatedNum),
            x,
            y,
          };
          if (mapped[i][j].value === "") {
            mapped[i][j] = { ...point };
            const cheked = checkPointForCorrection(mapped, point, i);
            if (!cheked) {
              isPossible = true;
            } else {
              mapped[i][j] = {
                ...point,
                value: "",
                disabled: false,
              };
              if (generatedNum > 9) {
                generatedNum = 0;
              }
              generatedNum++;
            }
          } else {
            isPossible = true;
          }
        }
      }
    }
    dispatchEvent(setMatrixAction(mapped));
  };
}
