import { Game } from "game/game";
import { useEffect, useRef, useState } from "react";
import "./GamePage.css";

export function GamePage() {
  const canvasElement = useRef<HTMLCanvasElement>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  useEffect(() => {
    if (!canvasElement.current) return;

    const game = new Game(canvasElement.current, setIsGameOver);

    game.start();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowUp" || e.key === " ") {
        game.rotateTetromino();
      }
      if (e.key === "ArrowDown") {
        game.downTetromino();
      }
      if (e.key === "ArrowLeft") {
        game.moveTetromino();
      }
      if (e.key === "ArrowRight") {
        game.moveTetromino(true);
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="game-page">
      <div className="game-page__manage-block">Здесь будут кнопки управления</div>
      <div className="game-page__canvas-wrapper">
        <canvas
          width="320"
          height="640"
          className="game-page__canvas"
          ref={canvasElement}
        />
      </div>
      <div className="game-page__statistic">{isGameOver ? "Game Over" : "Game"}</div>
    </div>
  );
}
