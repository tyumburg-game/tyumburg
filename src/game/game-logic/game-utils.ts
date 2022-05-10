import { QUEUE_SIZE, TETROMINOS } from "./contants";
import {
  TPlayfield,
  TTetrominoCoordinate,
  TTetrominoMatrix,
  TTetrominoName,
  TTetrominoQueue,
} from "./game-types";

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createTetromino() {
  const tetraminoNames: Array<TTetrominoName> = [
    "I",
    "J",
    "L",
    "O",
    "S",
    "T",
    "Z",
  ];

  const rand = getRandomInt(0, tetraminoNames.length - 1);
  const randomName = tetraminoNames[rand][0] as TTetrominoName;

  return randomName;
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
  const result = matrix.map((row, i) => row.map((_, j) => matrix[N - j][i]));

  return result;
}

//Проверяет валидность положения фигуры.
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
  const matrix = TETROMINOS[name];
  const col = playfield[0].length / 2 - Math.ceil(matrix[0].length / 2);
  const row = name === "I" ? -1 : -2;

  return {
    name: name,
    matrix: matrix,
    row: row,
    col: col,
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
