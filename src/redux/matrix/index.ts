import { ISquarePoint, LittleSquare, SquareSudoky } from "../../types/helpers";
import { generatedState } from "./state";

enum SudokyTypes {
  SET_SQUARE_POINT = "SET_SQUARE_POINT",
  SET_MATRIX = "SET_MATRIX",
}

export interface ISetSquarePointAction {
  type: SudokyTypes.SET_SQUARE_POINT;
  payload: ISquarePoint;
  squareIndex: number;
  littleSquareIndex: number;
}

export interface ISetMatrixAction {
  type: SudokyTypes.SET_MATRIX;
  payload: SquareSudoky;
}

export const setSquarePointAction = (
  payload: ISquarePoint,
  squareIndex: number,
  littleSquareIndex: number
): ISetSquarePointAction => {
  return {
    type: SudokyTypes.SET_SQUARE_POINT,
    payload,
    squareIndex,
    littleSquareIndex,
  };
};

export const setMatrixAction = (payload: SquareSudoky): ISetMatrixAction => {
  return {
    type: SudokyTypes.SET_MATRIX,
    payload,
  };
};

export default function SudokyReducer(
  state: SquareSudoky = [...generatedState],
  action: ISetSquarePointAction | ISetMatrixAction
): SquareSudoky {
  switch (action.type) {
    case SudokyTypes.SET_SQUARE_POINT:
      const newMatrix: SquareSudoky = [...state];
      const newSquare: LittleSquare = [...newMatrix[action.squareIndex]];
      newSquare[action.littleSquareIndex] = { ...action.payload };
      newMatrix[action.squareIndex] = newSquare;
      return newMatrix;
    case SudokyTypes.SET_MATRIX:
      return action.payload;
    default:
      return state;
  }
}
