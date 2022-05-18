import { GRID_SIZE, PLAYFIELD_SIZE, TETROMINOES_COLORS } from "../contants";
import { TPlayfield, TTetrominoName } from "../game-types";

export function drawPlayfield(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  playfield: TPlayfield
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let row = 0; row < PLAYFIELD_SIZE.rows; row++) {
    for (let col = 0; col < PLAYFIELD_SIZE.cols; col++) {
      if (playfield[row][col]) {
        const name = playfield[row][col] as TTetrominoName;

        ctx.fillStyle = TETROMINOES_COLORS[name];

        ctx.fillRect(
          col * GRID_SIZE,
          row * GRID_SIZE,
          GRID_SIZE - 1,
          GRID_SIZE - 1
        );
      }
    }
  }
}
