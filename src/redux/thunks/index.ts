import { ISquarePoint, SquareSudoky, ThunkResult } from "../../types/helpers";
import { setMatrixAction } from "../matrix";
import { checkPointForCorrection, generateSudoky } from "../../utils";

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
    const { complexity } = getState();
    const mapped: SquareSudoky = generateSudoky();
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 9; j++) {
        const randomize = complexity + Math.random() > 0.5 ? 0.1 : -0.1;
        const random = Math.random() > randomize + complexity;
        if (random) {
          mapped[i][j] = { ...mapped[i][j], value: "", disabled: false };
        }
      }
    }
    dispatch(setMatrixAction(mapped));
    cbOnComplete();
    alert("Have fun!");
  };
}
