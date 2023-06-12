import { Cell } from './Cell';

export class Board {
  cells: Cell[][] = [];
  // TODO
  /**
   * В будущем будет реализована кнопка назад, для этого нам перед новым ходом
   * нужно записывать текщее состояние доски.
   */
  copyBoard: Cell[][] = this.cells;
  isStartGame: boolean = false;
  isFirstStep = true; // Нужно знать первый ли это шаг, чтобы знать сколько чисел отправлять на доску

  public createBoard() {
    for (let y = 0; y < 4; y++) {
      const row: Cell[] = [];
      for (let x = 0; x < 4; x++) {
        row.push(new Cell(this, x, y, 0));
      }

      this.cells.push(row);
    }
  }

  /**
   * При старте игры нам нужно отобразить два числа, которые будут в рандомном
   * порядке располагаться на доске.
   */
  public startGame() {
    this.initStartPosition();
    this.isStartGame = true;
    this.isFirstStep = false;
  }

  /**
   * Отвечает за старт игры, чтобы на доске появлось 2 рандомных числа
   */
  public initStartPosition() {
    // if (!this.isStartGame && this.isFirstStep) {
    //   this.newNumber();
    //   this.newNumber();
    // }
    this.getCell(0, 1).value = 4;
    this.getCell(3, 3).value = 2;
  }

  /**
   * Рандомно отдаёт нам числа 2||4.
   */
  public newNumber() {
    const x = Math.floor(Math.random() * 4);
    const y = Math.floor(Math.random() * 4);

    if (this.getCell(x, y).value === 0) {
      this.getCell(x, y).value = Math.random() > 0.5 ? 2 : 4;
    } else {
      this.newNumber();
    }
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

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  public canMove() {}
}
