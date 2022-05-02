import { GRID_SIZE, TETROMINOS_СOLORS } from "../contants";
import { IPlayfield, ITetrominoName } from "../game-models";

export function drawPlayfield(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  playfield: IPlayfield
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 10; col++) {
      if (playfield[row][col]) {
        const name = playfield[row][col] as ITetrominoName;
        ctx.fillStyle = TETROMINOS_СOLORS[name];

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
