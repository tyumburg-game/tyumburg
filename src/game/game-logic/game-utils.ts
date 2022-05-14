import { QUEUE_SIZE, TETROMINOES } from "./contants";
import {
  TPlayfield,
  TTetrominoCoordinate,
  TTetrominoMatrix,
  TTetrominoName,
  TTetrominoQueue,
} from "./game-types";

export function getRandomInt(min: number, max: number): number {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);

  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

export function createTetromino() {
  const tetrominoNames: Array<TTetrominoName> = [
    "I",
    "J",
    "L",
    "O",
    "S",
    "T",
    "Z",
  ];

  const rand = getRandomInt(0, tetrominoNames.length - 1);
  return tetrominoNames[rand][0] as TTetrominoName;
}

// Возвращает очередь из случайных фигур
export function generateQueue(): Array<TTetrominoName> {
  const tetrominoQueue: Array<TTetrominoName> = [];

  let count = 0;
  while (count <= QUEUE_SIZE) {
    const randomName = createTetromino();
    tetrominoQueue.push(randomName);
    count++;
  }

  return tetrominoQueue;
}

// Поворочивает фигуру
export function rotateTetromino(matrix: TTetrominoMatrix): TTetrominoMatrix {
  const N = matrix.length - 1;
  return matrix.map((row, i) => row.map((_, j) => matrix[N - j][i]));
}

// Проверяет валидность положения фигуры.
export function isValidMove(
  matrix: TTetrominoMatrix,
  cellRow: number,
  cellCol: number,
  playfield: TPlayfield
) {
  // проверяем все строки и столбцы
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (
        matrix[row][col] &&
        // выходит за границы поля…
        (cellCol + col < 0 ||
          cellCol + col >= playfield[0].length ||
          cellRow + row >= playfield.length ||
          // пересекается с другими фигурами
          playfield[cellRow + row][cellCol + col])
      ) {
        return false;
      }
    }
  }

  return true;
}

// Возвращает следующую фигуру из очереди.
export function getNextTetromino(
  tetrominoQueue: TTetrominoQueue,
  playfield: TPlayfield
): TTetrominoCoordinate {
  const name: TTetrominoName = tetrominoQueue.shift() as TTetrominoName;
  const matrix = TETROMINOES[name];
  const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);
  const row = name === "I" ? -1 : -2;

  return {
    name,
    matrix,
    row,
    col,
  };
}

// Возвращает пустую матрицу поля.
export function getPlayfield(): TPlayfield {
  const playfield: TPlayfield = [];
  for (let row = -2; row < 20; row++) {
    playfield[row] = [];

    for (let col = 0; col < 10; col++) {
      playfield[row][col] = 0;
    }
  }
  return playfield;
}
