import { GRID_SIZE, TETROMINOS_СOLORS } from "../contants";
import { ITetrominoCoordinate } from "../game-models";

export function drawTetromino(
  ctx: CanvasRenderingContext2D,
  tetromino: ITetrominoCoordinate
) {
  ctx.fillStyle = TETROMINOS_СOLORS[tetromino.name];

  for (let row = 0; row < tetromino.matrix.length; row++) {
    for (let col = 0; col < tetromino.matrix[row].length; col++) {
      if (tetromino.matrix[row][col]) {
        ctx.fillRect(
          (tetromino.col + col) * GRID_SIZE,
          (tetromino.row + row) * GRID_SIZE,
          GRID_SIZE - 1,
          GRID_SIZE - 1
        );
      }
    }
  }
}
