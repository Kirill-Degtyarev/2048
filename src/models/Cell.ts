import { Board } from './Board';
export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: string;

  board: Board;
  id: number;

  constructor(board: Board, x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.board = board;
    this.id = x + y;
  }
}
