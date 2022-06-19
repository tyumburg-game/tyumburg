"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawPlayfield = void 0;
var contants_1 = require("../contants");
function drawPlayfield(ctx, canvas, playfield) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var row = 0; row < contants_1.PLAYFIELD_SIZE.rows; row++) {
        for (var col = 0; col < contants_1.PLAYFIELD_SIZE.cols; col++) {
            if (playfield[row][col]) {
                var name_1 = playfield[row][col];
                ctx.fillStyle = contants_1.TETROMINOES_COLORS[name_1];
                ctx.fillRect(col * contants_1.GRID_SIZE, row * contants_1.GRID_SIZE, contants_1.GRID_SIZE - 1, contants_1.GRID_SIZE - 1);
            }
        }
    }
}
exports.drawPlayfield = drawPlayfield;
//# sourceMappingURL=draw-playfield.js.map