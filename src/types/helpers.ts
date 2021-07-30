import { ThunkAction } from "redux-thunk";
import { IStateRedux } from "../redux";
import { ISetMatrixAction, ISetSquarePointAction } from "../redux/matrix";

export enum ComplexityLevels {
  "Easy, 3-5 prefilled numbers" = 0.7,
  "Medium, 3-4 prefilled numbers" = 0.5,
  "Hard — 1-3 prefilled numbers" = 0.2,
}

export interface ISquarePoint {
  disabled: boolean;
  correct: boolean;
  value: string;
  x: number;
  y: number;
}

export type Row = [
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

export type SquareSudoky = [Row, Row, Row, Row, Row, Row];

export type ThunkResult<R> = ThunkAction<
  R,
  IStateRedux,
  undefined,
  ISetSquarePointAction | ISetMatrixAction
>;
