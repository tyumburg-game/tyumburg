import { useEffect, useRef, useState } from "react";
import { Game } from "game/game";
import "./GamePage.css";
import Button from "components/Button/Button";
import { GameOverModal } from "./components/GameOverModal";
import { StartGameModal } from "./components/StartGameModal";

export function GamePage() {
  const canvasElement = useRef<HTMLCanvasElement>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isStartGameOpen, setIsStartGameOpen] = useState<boolean>(true);
  const [level, setLevel] = useState<number>(1);
  const [score, setScore] = useState<number>(0);
  const [currentGame, setCurrentGame] = useState<Game>();

  const onStopGame = () => {
    currentGame?.stopGame();
  };
  const onPauseGame = () => {
    currentGame?.switchPause();
  };

  const newGame = () => {
    if (!canvasElement.current) return;

    const game = new Game(
      canvasElement.current,
      setIsGameOver,
      setLevel,
      setScore
    );

    game.start();

    setCurrentGame(game);
    setIsGameOver(false);
    setScore(0);
    setLevel(1);
  };

  const onStartGame = () => {
    newGame();
    setIsStartGameOpen(false);
  };

  useEffect(() => {
    if (!currentGame) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowUp" || e.key === " ") {
        currentGame?.rotateTetromino();
      }
      if (e.key === "ArrowDown") {
        currentGame?.downTetromino();
      }
      if (e.key === "ArrowLeft") {
        currentGame?.moveTetrominoLeft();
      }
      if (e.key === "ArrowRight") {
        currentGame?.moveTetrominoRight();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [currentGame]);

  return (
    <>
      <div className="game-page">
        <div className="game-page__manage-block">
          <Button mode="primary" onClick={onStopGame}>
            Закончить
          </Button>
          <Button onClick={onPauseGame}>Пауза</Button>
        </div>
        <div className="game-page__canvas-wrapper">
          <canvas
            width="320"
            height="640"
            className="game-page__canvas"
            ref={canvasElement}
          />
        </div>
        <div className="game-page__statistic">
          <div className="game-page__statistic-item">Счет: {score}</div>
          <div className="game-page__statistic-item">Уровень: {level}</div>
        </div>
      </div>
      <GameOverModal
        isOpen={isGameOver}
        handleNewGame={newGame}
        score={score}
      />
      <StartGameModal isOpen={isStartGameOpen} handleNewGame={onStartGame} />
    </>
  );
}
