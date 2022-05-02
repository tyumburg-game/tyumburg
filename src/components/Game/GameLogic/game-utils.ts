import { TETROMINOS } from "./contants";
import {
  IPlayfield,
  ITetrominoCoordinate,
  ITetrominoMatrix,
  ITetrominoName,
  ITetrominoQueue,
} from "./game-models";

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Возвращает очередь из случайных фигур
export function generateQueue(): Array<ITetrominoName> {
  const tetramonoNames: Array<ITetrominoName> = [
    "I",
    "J",
    "L",
    "O",
    "S",
    "T",
    "Z",
  ];
  const tetrominoQueue: Array<ITetrominoName> = [];

  let count = 0;
  while (count < tetramonoNames.length) {
    const rand = getRandomInt(0, tetramonoNames.length - 1);
    const randomName = tetramonoNames[rand][0] as ITetrominoName;
    tetrominoQueue.push(randomName);
    count++;
  }

  return tetrominoQueue;
}

// Поворочивает фигуру
export function rotateTetromino(matrix: ITetrominoMatrix): ITetrominoMatrix {
  const N = matrix.length - 1;
  const result = matrix.map((row, i) => row.map((_, j) => matrix[N - j][i]));

  return result;
}

//Проверяет валидность положения фигуры.
export function isValidMove(
  matrix: ITetrominoMatrix,
  cellRow: number,
  cellCol: number,
  playfield: IPlayfield
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

// Возвращает слудующую фигуру из очереди.
export function getNextTetromino(
  tetrominoQueue: ITetrominoQueue,
  playfield: IPlayfield
): ITetrominoCoordinate {
  const name: ITetrominoName = tetrominoQueue.pop() as ITetrominoName;
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
export function getPlayfiled(): IPlayfield {
  const playfield: IPlayfield = [];
  for (let row = -2; row < 20; row++) {
    playfield[row] = [];

    for (let col = 0; col < 10; col++) {
      playfield[row][col] = 0;
    }
  }
  return playfield;
}
