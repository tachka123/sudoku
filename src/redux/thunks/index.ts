import {
  ISquarePoint,
  LittleSquare,
  SquareSudoky,
  ThunkResult,
} from "../../types/helpers";
import { setMatrixAction } from "../matrix";

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
        const currentPoint = mapped[i][j];
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
          mapped[i]
        );
        if (checkedX > 1 || checkedY > 1 || checkSquare > 1) {
          mapped[i][j] = { ...mapped[i][j], correct: false };
        } else {
          mapped[i][j] = { ...mapped[i][j], correct: true };
        }
      }
    }
    dispatchEvent(setMatrixAction(mapped));
  };
}

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
