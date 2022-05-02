export type ITetromino = Record<ITetrominoName, ITetrominoMatrix>;
export type IColorsTetromino = Record<ITetrominoName, string>;
export type IPlayfield = Array<Array<0 | 1 | ITetrominoName>>;
export type ITetrominoName = "I" | "J" | "L" | "O" | "S" | "T" | "Z";
export type ITetrominoMatrix = Array<Array<0 | 1>>;
export type ITetrominoCoordinate = {
  name: ITetrominoName;
  matrix: ITetrominoMatrix;
  row: number;
  col: number;
};
export type ITetrominoQueue = Array<ITetrominoName>;
