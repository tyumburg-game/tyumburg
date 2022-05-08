import { TPlayfield, TTetrominoCoordinate } from "./game-types";
import { isValidMove, rotateTetromino } from "./game-utils";

export function keydownHandler(
  e: KeyboardEvent,
  isGameOver: boolean,
  tetromino: TTetrominoCoordinate,
  playfield: TPlayfield
) {
  if (isGameOver) return;

  if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
    const col = e.key === "ArrowLeft" ? tetromino.col - 1 : tetromino.col + 1;

    if (isValidMove(tetromino.matrix, tetromino.row, col, playfield)) {
      tetromino.col = col;
    }
  }

  if (e.key === "ArrowUp" || e.key === " ") {
    const matrix = rotateTetromino(tetromino.matrix);
    if (isValidMove(matrix, tetromino.row, tetromino.col, playfield)) {
      tetromino.matrix = matrix;
    }
    0;
  }

  if (e.key === "ArrowDown") {
    const row = tetromino.row + 1;

    if (!isValidMove(tetromino.matrix, row, tetromino.col, playfield)) {
      tetromino.row = row - 1;

      return true;
    }
    tetromino.row = row;
  }
  return false;
}
