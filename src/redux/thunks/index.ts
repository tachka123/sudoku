import {
  ISquarePoint,
  LittleSquare,
  SquareSudoky,
  ThunkResult,
} from "../../types/helpers";
import { setMatrixAction } from "../matrix";
import { countX, countY, generatedState } from "../matrix/state";

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
    const sudoky = generatedState;
    const { complexity } = getState();
    const mapped = [...sudoky];
    for (let i = 0; i < randomize + complexity; i++) {
      const square = Math.floor(Math.random() * 6);
      const littleSquare = Math.floor(Math.random() * 9);
      const x = countX(square, littleSquare);
      const y = countY(square, littleSquare);
      let val = 0;
      while (val === 0) {
        const value = Math.floor(Math.random() * 9);
        const isIncorrect = checkPointForCorrection(
          sudoky,
          {
            x,
            y,
            value: String(value),
            disabled: true,
            correct: true,
          },
          square
        );
        if (!isIncorrect) {
          val = value;
        }
      }
      mapped[square][littleSquare] = {
        correct: true,
        disabled: true,
        value: String(val),
        x,
        y,
      };
    }
    cbOnComplete();
    alert("Have fun!");
  };
}
