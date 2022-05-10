export type TTetromino = Record<TTetrominoName, TTetrominoMatrix>;
export type TColorsTetromino = Record<TTetrominoName, string>;
export type TPlayfield = Array<Array<0 | 1 | TTetrominoName>>;
export type TTetrominoName = "I" | "J" | "L" | "O" | "S" | "T" | "Z";
export type TTetrominoMatrix = Array<Array<0 | 1>>;
export type TTetrominoCoordinate = {
  name: TTetrominoName;
  matrix: TTetrominoMatrix;
  row: number;
  col: number;
};
export type TTetrominoQueue = Array<TTetrominoName>;
export type TPLAYFIELD_SIZE = {
  COLS: number;
  ROWS: number;
};
