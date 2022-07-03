import { Dispatch } from "react";

import { drawPlayfield } from "./game-logic/canvas-draw/draw-playfield";
import { drawTetromino } from "./game-logic/canvas-draw/draw-tetromino";
import { DEFAULT_SPEED, LEVEL_SCORE, SPEED_STEP } from "./game-logic/contants";
import {
  TPlayfield,
  TTetrominoCoordinate,
  TTetrominoQueue,
} from "./game-logic/game-types";
import {
  createTetromino,
  generateQueue,
  getNextTetromino,
  getPlayfield,
  isValidMove,
  rotateTetromino,
} from "./game-logic/game-utils";

export class Game {
  ctx: CanvasRenderingContext2D;

  canvas: HTMLCanvasElement;

  rAF: number = 0;

  tetrominoQueue: TTetrominoQueue;

  playfield: TPlayfield;

  count: number = 0;

  tetromino: TTetrominoCoordinate;

  setIsGameOver: Dispatch<boolean>;

  setLevel: Dispatch<number>;

  setScore: Dispatch<number>;

  timer: Date;

  speed: number;

  score: number = 0;

  level: number = 1;

  isPause: boolean = false;

  constructor(
    canvasElement: HTMLCanvasElement,
    setIsGameOver: Dispatch<boolean>,
    setLevel: Dispatch<number>,
    setScore: Dispatch<number>
  ) {
    this.setIsGameOver = setIsGameOver;
    this.setLevel = setLevel;
    this.setScore = setScore;
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext("2d") as CanvasRenderingContext2D;
    this.tetrominoQueue = generateQueue();
    this.playfield = getPlayfield();
    this.tetromino = getNextTetromino(this.tetrominoQueue, this.playfield);
    this.timer = new Date();
    this.speed = DEFAULT_SPEED;
  }

  // когда фигура остановилась
  stopTetromino() {
    for (let row = 0; row < this.tetromino.matrix.length; row++) {
      for (let col = 0; col < this.tetromino.matrix[row].length; col++) {
        if (this.tetromino.matrix[row][col]) {
          if (this.tetromino.row + row < 0) {
            return this.gameOver();
          }

          this.playfield[this.tetromino.row + row][this.tetromino.col + col] =
            this.tetromino.name;
        }
      }
    }
  }

  placeTetromino = () => {
    this.stopTetromino();
    this.clearRows();
    this.nextTetromino();
  };

  nextTetromino = () => {
    this.tetromino = getNextTetromino(this.tetrominoQueue, this.playfield);
    this.tetrominoQueue.push(createTetromino());
  };

  clearRows = () => {
    // очищаем ряды снизу вверх
    for (let row = this.playfield.length - 1; row >= 0; ) {
      // проверяем заполнен ли ряд и очищаем его
      if (this.playfield[row].every((cell) => !!cell)) {
        for (let r = row; r >= 0; r--) {
          for (let c = 0; c < this.playfield[r].length; c++) {
            this.playfield[r][c] = this.playfield[r - 1][c];
          }
        }

        this.scoreUp();
      } else {
        row--;
      }
    }
  };

  scoreUp = () => {
    this.score += 10;
    this.setScore(this.score);
    this.levelCalc();
  };

  levelCalc = () => {
    this.level = Math.floor(this.score / LEVEL_SCORE) + 1;
    this.setLevel(this.level);
  };

  gameOver = () => {
    this.setIsGameOver(true);
    cancelAnimationFrame(this.rAF);
    this.setIsGameOver(true);
  };

  // основной цикл игры
  loop = () => {
    this.rAF = requestAnimationFrame(this.loop);

    if (this.isPause) return;

    drawPlayfield(this.ctx, this.canvas, this.playfield);

    // рисуем текущую фигуру
    if (this.tetromino) {
      if (
        Number(new Date()) - Number(this.timer) >
        this.speed - (SPEED_STEP * this.level - 1)
      ) {
        this.tetromino.row++;
        this.timer = new Date();

        // если движение закончилось
        if (
          !isValidMove(
            this.tetromino.matrix,
            this.tetromino.row,
            this.tetromino.col,
            this.playfield
          )
        ) {
          this.tetromino.row--;
          this.placeTetromino();
        }
      }

      drawTetromino(this.ctx, this.tetromino);
    }
  };

  rotateTetromino = () => {
    const matrix = rotateTetromino(this.tetromino.matrix);

    if (
      isValidMove(
        matrix,
        this.tetromino.row,
        this.tetromino.col,
        this.playfield
      )
    ) {
      this.tetromino.matrix = matrix;
    }
  };

  downTetromino() {
    const row = this.tetromino.row + 1;

    if (
      !isValidMove(
        this.tetromino.matrix,
        row,
        this.tetromino.col,
        this.playfield
      )
    ) {
      this.tetromino.row = row - 1;
      this.placeTetromino();

      return;
    }

    this.tetromino.row = row;
  }

  moveTetromino(right?: boolean) {
    const col = right ? this.tetromino.col + 1 : this.tetromino.col - 1;

    if (
      isValidMove(
        this.tetromino.matrix,
        this.tetromino.row,
        col,
        this.playfield
      )
    ) {
      this.tetromino.col = col;
    }
  }

  moveTetrominoLeft = () => {
    this.moveTetromino();
  };

  moveTetrominoRight = () => {
    this.moveTetromino(true);
  };

  public start() {
    this.isPause = false;
    this.setIsGameOver(false);
    this.rAF = requestAnimationFrame(this.loop);
  }

  public switchPause() {
    this.isPause = !this.isPause;
  }

  public stopGame() {
    this.gameOver();
  }
}
