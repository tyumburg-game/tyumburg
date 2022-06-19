"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showGameOver = void 0;
function showGameOver(ctx, canvas) {
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
exports.showGameOver = showGameOver;
//# sourceMappingURL=show-game-over.js.map