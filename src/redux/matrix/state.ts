import { ISquarePoint, Row, SquareSudoky } from "../../types/helpers";

export const example: SquareSudoky = [
  [
    { value: "1", y: 0, x: 0, correct: true, disabled: false },
    { value: "2", y: 0, x: 1, correct: true, disabled: false },
    { value: "3", y: 0, x: 2, correct: true, disabled: false },
    { value: "4", y: 0, x: 3, correct: true, disabled: false },
    { value: "5", y: 0, x: 4, correct: true, disabled: false },
    { value: "6", y: 0, x: 5, correct: true, disabled: false },
    { value: "7", y: 0, x: 6, correct: true, disabled: false },
    { value: "8", y: 0, x: 7, correct: true, disabled: false },
    { value: "9", y: 0, x: 8, correct: true, disabled: false },
  ],
  [
    { value: "4", y: 1, x: 0, correct: true, disabled: false },
    { value: "5", y: 1, x: 1, correct: true, disabled: false },
    { value: "6", y: 1, x: 2, correct: true, disabled: false },
    { value: "7", y: 1, x: 3, correct: true, disabled: false },
    { value: "8", y: 1, x: 4, correct: true, disabled: false },
    { value: "9", y: 1, x: 5, correct: true, disabled: false },
    { value: "1", y: 1, x: 6, correct: true, disabled: false },
    { value: "2", y: 1, x: 7, correct: true, disabled: false },
    { value: "3", y: 1, x: 8, correct: true, disabled: false },
  ],
  [
    { value: "7", y: 2, x: 0, correct: true, disabled: false },
    { value: "8", y: 2, x: 1, correct: true, disabled: false },
    { value: "9", y: 2, x: 2, correct: true, disabled: false },
    { value: "1", y: 2, x: 3, correct: true, disabled: false },
    { value: "2", y: 2, x: 4, correct: true, disabled: false },
    { value: "3", y: 2, x: 5, correct: true, disabled: false },
    { value: "4", y: 2, x: 6, correct: true, disabled: false },
    { value: "5", y: 2, x: 7, correct: true, disabled: false },
    { value: "6", y: 2, x: 8, correct: true, disabled: false },
  ],
  [
    { value: "2", y: 3, x: 0, correct: true, disabled: false },
    { value: "3", y: 3, x: 1, correct: true, disabled: false },
    { value: "1", y: 3, x: 2, correct: true, disabled: false },
    { value: "5", y: 3, x: 3, correct: true, disabled: false },
    { value: "6", y: 3, x: 4, correct: true, disabled: false },
    { value: "4", y: 3, x: 5, correct: true, disabled: false },
    { value: "8", y: 3, x: 6, correct: true, disabled: false },
    { value: "9", y: 3, x: 7, correct: true, disabled: false },
    { value: "7", y: 3, x: 8, correct: true, disabled: false },
  ],
  [
    { value: "5", y: 4, x: 0, correct: true, disabled: false },
    { value: "6", y: 4, x: 1, correct: true, disabled: false },
    { value: "4", y: 4, x: 2, correct: true, disabled: false },
    { value: "8", y: 4, x: 3, correct: true, disabled: false },
    { value: "9", y: 4, x: 4, correct: true, disabled: false },
    { value: "7", y: 4, x: 5, correct: true, disabled: false },
    { value: "2", y: 4, x: 6, correct: true, disabled: false },
    { value: "3", y: 4, x: 7, correct: true, disabled: false },
    { value: "1", y: 4, x: 8, correct: true, disabled: false },
  ],
  [
    { value: "8", y: 5, x: 0, correct: true, disabled: false },
    { value: "9", y: 5, x: 1, correct: true, disabled: false },
    { value: "7", y: 5, x: 2, correct: true, disabled: false },
    { value: "2", y: 5, x: 3, correct: true, disabled: false },
    { value: "3", y: 5, x: 4, correct: true, disabled: false },
    { value: "1", y: 5, x: 5, correct: true, disabled: false },
    { value: "5", y: 5, x: 6, correct: true, disabled: false },
    { value: "6", y: 5, x: 7, correct: true, disabled: false },
    { value: "4", y: 5, x: 8, correct: true, disabled: false },
  ],
];

export const defaultSquarePoint: ISquarePoint = {
  correct: true,
  disabled: false,
  value: "2",
  x: 0,
  y: 0,
};

export const defaultRow: Row = [
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
  defaultRow,
  defaultRow,
  defaultRow,
  defaultRow,
  defaultRow,
  defaultRow,
];

export function createDefault(): SquareSudoky {
  const sudoky: SquareSudoky = [...defaultStateSudoky];
  for (let i = 0; i < 6; i++) {
    const littleSquare: Row = [...defaultRow];
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
  return squareNum;
}

export function countX(squareNum: number, pointNum: number): number {
  return pointNum;
}

export function countSquare(x: number, y: number): number {
  const byY = y > 2 ? 3 : 0;
  const byX = x > 2 ? (x > 5 ? 6 : 3) : 0;
  return byY + byX;
}

export function countRow(x: number, y: number, square: number): number {
  const byY = y - square > 2 ? 3 : 0;
  const byX = x > 2 ? (x > 5 ? 6 : 3) : 0;
  return byY + byX;
}

export function countXandY(...args: [number, number]) {
  return [(countX(...args), countY(...args))];
}

export const generatedState = createDefault();
