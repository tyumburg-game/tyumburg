import { TTetromino, TPLAYFIELD_SIZE } from "./game-types";

export const TETROMINOS: TTetromino = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
};

export const TETROMINOS_СOLORS = {
  I: "#8338EC",
  O: "#F4976C",
  T: "#FBE8A6",
  S: "#FFBE0B",
  Z: "#FF006E",
  J: "#D2FDFF",
  L: "#303C6C",
};

export const GRID_SIZE = 32;
export const DEFAULT_SPEED = 500;
export const PLAYFIELD_SIZE: TPLAYFIELD_SIZE = {
  COLS: 10,
  ROWS: 20,
};
export const QUEUE_SIZE = 2;