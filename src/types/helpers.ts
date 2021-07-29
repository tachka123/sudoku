import { ThunkAction } from "redux-thunk";
import { IStateRedux } from "../redux";
import { ISetMatrixAction, ISetSquarePointAction } from "../redux/matrix";

export enum ComplexityLevels {
  "Easy, 3-5 prefilled numbers",
  "Medium, 3-4 prefilled numbers",
  "Hard — 1-3 prefilled numbers",
}

export interface ISquarePoint {
  disabled: boolean;
  correct: boolean;
  value: string;
  x: number;
  y: number;
}

export type LittleSquare = [
  ISquarePoint,
  ISquarePoint,
  ISquarePoint,
  ISquarePoint,
  ISquarePoint,
  ISquarePoint,
  ISquarePoint,
  ISquarePoint,
  ISquarePoint
];

export type SquareSudoky = [
  LittleSquare,
  LittleSquare,
  LittleSquare,
  LittleSquare,
  LittleSquare,
  LittleSquare
];

export type ThunkResult<R> = ThunkAction<
  R,
  IStateRedux,
  undefined,
  ISetSquarePointAction | ISetMatrixAction
>;
