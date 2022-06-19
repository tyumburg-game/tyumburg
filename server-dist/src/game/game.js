"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var draw_playfield_1 = require("./game-logic/canvas-draw/draw-playfield");
var draw_tetromino_1 = require("./game-logic/canvas-draw/draw-tetromino");
var contants_1 = require("./game-logic/contants");
var game_utils_1 = require("./game-logic/game-utils");
var Game = /** @class */ (function () {
    function Game(canvasElement, setIsGameOver, setLevel, setScore) {
        var _this = this;
        this.rAF = 0;
        this.count = 0;
        this.score = 0;
        this.level = 1;
        this.isPause = false;
        this.placeTetromino = function () {
            _this.stopTetromino();
            _this.clearRows();
            _this.nextTetromino();
        };
        this.nextTetromino = function () {
            _this.tetromino = (0, game_utils_1.getNextTetromino)(_this.tetrominoQueue, _this.playfield);
            _this.tetrominoQueue.push((0, game_utils_1.createTetromino)());
        };
        this.clearRows = function () {
            // очищаем ряды снизу вверх
            for (var row = _this.playfield.length - 1; row >= 0;) {
                // проверяем заполнен ли ряд и очищаем его
                if (_this.playfield[row].every(function (cell) { return !!cell; })) {
                    for (var r = row; r >= 0; r--) {
                        for (var c = 0; c < _this.playfield[r].length; c++) {
                            _this.playfield[r][c] = _this.playfield[r - 1][c];
                        }
                    }
                    _this.scoreUp();
                }
                else {
                    row--;
                }
            }
        };
        this.scoreUp = function () {
            _this.score += 10;
            _this.setScore(_this.score);
            _this.levelCalc();
        };
        this.levelCalc = function () {
            _this.level = Math.floor(_this.score / contants_1.LEVEL_SCORE) + 1;
            _this.setLevel(_this.level);
        };
        this.gameOver = function () {
            _this.setIsGameOver(true);
            cancelAnimationFrame(_this.rAF);
            _this.setIsGameOver(true);
        };
        // основной цикл игры
        this.loop = function () {
            _this.rAF = requestAnimationFrame(_this.loop);
            if (_this.isPause)
                return;
            (0, draw_playfield_1.drawPlayfield)(_this.ctx, _this.canvas, _this.playfield);
            // рисуем текущую фигуру
            if (_this.tetromino) {
                if (Number(new Date()) - Number(_this.timer) >
                    _this.speed - (contants_1.SPEED_STEP * _this.level - 1)) {
                    _this.tetromino.row++;
                    _this.timer = new Date();
                    // если движение закончилось
                    if (!(0, game_utils_1.isValidMove)(_this.tetromino.matrix, _this.tetromino.row, _this.tetromino.col, _this.playfield)) {
                        _this.tetromino.row--;
                        _this.placeTetromino();
                    }
                }
                (0, draw_tetromino_1.drawTetromino)(_this.ctx, _this.tetromino);
            }
        };
        this.rotateTetromino = function () {
            var matrix = (0, game_utils_1.rotateTetromino)(_this.tetromino.matrix);
            if ((0, game_utils_1.isValidMove)(matrix, _this.tetromino.row, _this.tetromino.col, _this.playfield)) {
                _this.tetromino.matrix = matrix;
            }
        };
        this.moveTetrominoLeft = function () {
            _this.moveTetromino();
        };
        this.moveTetrominoRight = function () {
            _this.moveTetromino(true);
        };
        this.setIsGameOver = setIsGameOver;
        this.setLevel = setLevel;
        this.setScore = setScore;
        this.canvas = canvasElement;
        this.ctx = canvasElement.getContext("2d");
        this.tetrominoQueue = (0, game_utils_1.generateQueue)();
        this.playfield = (0, game_utils_1.getPlayfield)();
        this.tetromino = (0, game_utils_1.getNextTetromino)(this.tetrominoQueue, this.playfield);
        this.timer = new Date();
        this.speed = contants_1.DEFAULT_SPEED;
    }
    // когда фигура остановилась
    Game.prototype.stopTetromino = function () {
        for (var row = 0; row < this.tetromino.matrix.length; row++) {
            for (var col = 0; col < this.tetromino.matrix[row].length; col++) {
                if (this.tetromino.matrix[row][col]) {
                    if (this.tetromino.row + row < 0) {
                        return this.gameOver();
                    }
                    this.playfield[this.tetromino.row + row][this.tetromino.col + col] =
                        this.tetromino.name;
                }
            }
        }
    };
    Game.prototype.downTetromino = function () {
        var row = this.tetromino.row + 1;
        if (!(0, game_utils_1.isValidMove)(this.tetromino.matrix, row, this.tetromino.col, this.playfield)) {
            this.tetromino.row = row - 1;
            this.placeTetromino();
            return;
        }
        this.tetromino.row = row;
    };
    Game.prototype.moveTetromino = function (right) {
        var col = right ? this.tetromino.col + 1 : this.tetromino.col - 1;
        if ((0, game_utils_1.isValidMove)(this.tetromino.matrix, this.tetromino.row, col, this.playfield)) {
            this.tetromino.col = col;
        }
    };
    Game.prototype.start = function () {
        this.isPause = false;
        this.setIsGameOver(false);
        this.rAF = requestAnimationFrame(this.loop);
    };
    Game.prototype.switchPause = function () {
        this.isPause = !this.isPause;
    };
    Game.prototype.stopGame = function () {
        this.gameOver();
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map