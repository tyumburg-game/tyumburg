"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.drawTetromino = void 0;
var contants_1 = require("../contants");
function drawTetromino(ctx, tetromino) {
    ctx.fillStyle = contants_1.TETROMINOES_COLORS[tetromino.name];
    for (var row = 0; row < tetromino.matrix.length; row++) {
        for (var col = 0; col < tetromino.matrix[row].length; col++) {
            if (tetromino.matrix[row][col]) {
                ctx.fillRect((tetromino.col + col) * contants_1.GRID_SIZE, (tetromino.row + row) * contants_1.GRID_SIZE, contants_1.GRID_SIZE - 1, contants_1.GRID_SIZE - 1);
            }
        }
    }
}
exports.drawTetromino = drawTetromino;
