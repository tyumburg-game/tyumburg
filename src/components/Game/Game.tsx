import { useEffect, useRef, useState } from "react";
import "./Game.css";
import {
  IPlayfield,
  ITetrominoCoordinate,
  ITetrominoQueue,
} from "./GameLogic/game-models";
import {
  generateQueue,
  getNextTetromino,
  getPlayfiled,
  isValidMove,
} from "./GameLogic/game-utils";
import { showGameOver } from "./GameLogic/CanvasDraw/show-game-over";
import { drawPlayfield } from "./GameLogic/CanvasDraw/draw-playfield";
import { drawTetromino } from "./GameLogic/CanvasDraw/draw-tetromino";
import { keydownHendler } from "./GameLogic/game-keydown-handler";

export function Game() {
  const canvasElement = useRef<HTMLCanvasElement>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  useEffect(() => {
    if (!canvasElement.current) return;
    const ctx = canvasElement.current?.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    const canvas = canvasElement.current as HTMLCanvasElement;
    let rAF: number;
    let tetrominoQueue: ITetrominoQueue = generateQueue();
    let playfield: IPlayfield = getPlayfiled();
    let count: number = 0;

    let tetromino: ITetrominoCoordinate = getNextTetromino(
      tetrominoQueue,
      playfield
    );

    // когда фигура остановилась
    function stopTetromino() {
      for (let row = 0; row < tetromino.matrix.length; row++) {
        for (let col = 0; col < tetromino.matrix[row].length; col++) {
          if (tetromino.matrix[row][col]) {
            if (tetromino.row + row < 0) {
              return gameOver();
            }

            playfield[tetromino.row + row][tetromino.col + col] =
              tetromino.name;
          }
        }
      }

      // очищаем ряды снизу вверх
      for (let row = playfield.length - 1; row >= 0; ) {
        // проверяем заполнен ли ряд и очищаем его
        if (playfield[row].every((cell) => !!cell)) {
          for (let r = row; r >= 0; r--) {
            for (let c = 0; c < playfield[r].length; c++) {
              playfield[r][c] = playfield[r - 1][c];
            }
          }
        } else {
          row--;
        }
      }
      // получаем следующую фигуру
      if (tetrominoQueue.length === 0) {
        tetrominoQueue = generateQueue();
      }
      tetromino = getNextTetromino(tetrominoQueue, playfield);
    }

    function gameOver() {
      setIsGameOver(true);
      cancelAnimationFrame(rAF);
      showGameOver(ctx, canvas);
    }

    // основной цикл игры
    function loop() {
      rAF = requestAnimationFrame(loop);
      drawPlayfield(ctx, canvas, playfield);
      // рисуем текущую фигуру
      if (tetromino) {
        if (++count > 35) {
          tetromino.row++;
          count = 0;

          // если движение закончилось
          if (
            !isValidMove(
              tetromino.matrix,
              tetromino.row,
              tetromino.col,
              playfield
            )
          ) {
            tetromino.row--;
            stopTetromino();
          }
        }

        drawTetromino(ctx, tetromino);
      }
    }
    rAF = requestAnimationFrame(loop);

    function onKeyDown(e: KeyboardEvent) {
      const result = keydownHendler(e, isGameOver, tetromino, playfield);
      if (result) {
        stopTetromino();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="game">
      <div className="game__manage-block">Здесь будут кнопки управления</div>
      <div className="game__canvas-wrapper">
        <canvas
          width="320"
          height="640"
          className="game__canvas"
          ref={canvasElement}
        ></canvas>
      </div>
      <div className="game__statistic">Здесь будет счёт игры</div>
    </div>
  );
}
