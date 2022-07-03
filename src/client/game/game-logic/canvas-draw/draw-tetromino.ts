import { GRID_SIZE, TETROMINOES_COLORS } from "../contants";
import { TTetrominoCoordinate } from "../game-types";

export function drawTetromino(
  ctx: CanvasRenderingContext2D,
  tetromino: TTetrominoCoordinate
) {
  ctx.fillStyle = TETROMINOES_COLORS[tetromino.name];

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
