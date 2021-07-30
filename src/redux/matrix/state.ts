import { ISquarePoint, LittleSquare, SquareSudoky } from "../../types/helpers";

export const defaultSquarePoint: ISquarePoint = {
  correct: true,
  disabled: false,
  value: "2",
  x: 0,
  y: 0,
};

export const defaultLittleSquare: LittleSquare = [
  defaultSquarePoint,
  defaultSquarePoint,
  defaultSquarePoint,
  defaultSquarePoint,
  defaultSquarePoint,
  defaultSquarePoint,
  defaultSquarePoint,
  defaultSquarePoint,
  defaultSquarePoint,
];

export const defaultStateSudoky: SquareSudoky = [
  defaultLittleSquare,
  defaultLittleSquare,
  defaultLittleSquare,
  defaultLittleSquare,
  defaultLittleSquare,
  defaultLittleSquare,
];

export function createDefault(): SquareSudoky {
  const sudoky: SquareSudoky = [...defaultStateSudoky];
  for (let i = 0; i < 6; i++) {
    const littleSquare: LittleSquare = [...defaultLittleSquare];
    for (let j = 0; j < 9; j++) {
      littleSquare[j] = {
        correct: true,
        disabled: false,
        value: "",
        x: countX(i, j),
        y: countY(i, j),
      };
    }
    sudoky[i] = littleSquare;
  }
  return sudoky;
}

export function countY(squareNum: number, pointNum: number): number {
  const countSquare = squareNum <= 2 ? 0 : 3;
  const countPoint = pointNum <= 2 ? 0 : pointNum <= 5 ? 1 : 2;
  return countSquare + countPoint;
}

export function countX(squareNum: number, pointNum: number): number {
  const deleteIfSecondLine = squareNum <= 2 ? squareNum : squareNum - 3;
  const countSquare =
    deleteIfSecondLine === 0 ? 0 : deleteIfSecondLine === 1 ? 3 : 6;
  const countPoint =
    pointNum <= 2 ? pointNum : pointNum <= 5 ? pointNum - 3 : pointNum - 6;
  return countSquare + countPoint;
}

export const generatedState = createDefault();
