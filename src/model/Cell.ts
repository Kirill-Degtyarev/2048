import { Board } from './Board';
export class Cell {
  readonly x: number;
  readonly y: number;

  value: number;
  board: Board;
  id: number;

  constructor(board: Board, x: number, y: number, value: number) {
    this.x = x;
    this.y = y;

    this.value = value;
    this.board = board;
    this.id = x + y;
  }
}
