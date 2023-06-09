import { Cell } from './Cell';

export class Board {
  cells: Cell[][] = [];
  copyBoard: Cell[][] = this.cells;
  isStartGame: boolean = false;
  isFirstStep = true;

  public createBoard() {
    for (let i = 0; i < 4; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 4; j++) {
        row.push(new Cell(this, j, i, 0));
      }

      this.cells.push(row);
    }
  }

  public startGame() {
    this.initStartPosition();
    this.isStartGame = true;
    this.isFirstStep = false;
  }

  public initStartPosition() {
    if (!this.isStartGame && this.isFirstStep) {
      this.newNumber();
      this.newNumber();
    }
  }

  public newNumber() {
    const x = Math.floor(Math.random() * 4);
    const y = Math.floor(Math.random() * 4);
    this.cells[x][y].value = Math.random() > 0.5 ? 2 : 4;
  }

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.isStartGame = this.isStartGame;
    return newBoard;
  }

  public restartGame() {
    this.cells = [];
    this.createBoard();
    this.isFirstStep = true;
    this.isStartGame = false;
  }
}
