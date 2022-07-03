export function showGameOver(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  ctx.fillStyle = "black";
  ctx.globalAlpha = 0.75;
  ctx.fillRect(0, canvas.height / 2 - 30, canvas.width, 60);
  ctx.globalAlpha = 1;
  ctx.fillStyle = "white";
  ctx.font = "36px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("GAME OVER!", canvas.width / 2, canvas.height / 2);
}
