"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayfield = exports.getNextTetromino = exports.isValidMove = exports.rotateTetromino = exports.generateQueue = exports.createTetromino = exports.getRandomInt = void 0;
var contants_1 = require("./contants");
function getRandomInt(min, max) {
    var minValue = Math.ceil(min);
    var maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}
exports.getRandomInt = getRandomInt;
function createTetromino() {
    var tetrominoNames = [
        "I",
        "J",
        "L",
        "O",
        "S",
        "T",
        "Z",
    ];
    var rand = getRandomInt(0, tetrominoNames.length - 1);
    return tetrominoNames[rand][0];
}
exports.createTetromino = createTetromino;
// Возвращает очередь из случайных фигур
function generateQueue() {
    var tetrominoQueue = [];
    var count = 0;
    while (count <= contants_1.QUEUE_SIZE) {
        var randomName = createTetromino();
        tetrominoQueue.push(randomName);
        count++;
    }
    return tetrominoQueue;
}
exports.generateQueue = generateQueue;
// Поворочивает фигуру
function rotateTetromino(matrix) {
    var N = matrix.length - 1;
    return matrix.map(function (row, i) { return row.map(function (_, j) { return matrix[N - j][i]; }); });
}
exports.rotateTetromino = rotateTetromino;
// Проверяет валидность положения фигуры.
function isValidMove(matrix, cellRow, cellCol, playfield) {
    // проверяем все строки и столбцы
    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] &&
                // выходит за границы поля…
                (cellCol + col < 0 ||
                    cellCol + col >= playfield[0].length ||
                    cellRow + row >= playfield.length ||
                    // пересекается с другими фигурами
                    playfield[cellRow + row][cellCol + col])) {
                return false;
            }
        }
    }
    return true;
}
exports.isValidMove = isValidMove;
// Возвращает следующую фигуру из очереди.
function getNextTetromino(tetrominoQueue, playfield) {
    var name = tetrominoQueue.shift();
    var matrix = contants_1.TETROMINOES[name];
    var col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);
    var row = name === "I" ? -1 : -2;
    return {
        name: name,
        matrix: matrix,
        row: row,
        col: col,
    };
}
exports.getNextTetromino = getNextTetromino;
// Возвращает пустую матрицу поля.
function getPlayfield() {
    var playfield = [];
    for (var row = -2; row < 20; row++) {
        playfield[row] = [];
        for (var col = 0; col < 10; col++) {
            playfield[row][col] = 0;
        }
    }
    return playfield;
}
exports.getPlayfield = getPlayfield;
//# sourceMappingURL=game-utils.js.map