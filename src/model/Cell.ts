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

  public moveHorizontal(directionTravel: boolean) {
    if (directionTravel && this.x !== 3) {
      const nextCell = this.board.getCell(this.x + 1, this.y);

      if (nextCell.value === 0) {
        nextCell.setValue(nextCell, this.value);
        this.setValue(this, 0);
      }

      if (nextCell.value === this.value) {
        nextCell.setValue(nextCell, this.value + nextCell.value);
        this.setValue(this, 0);
      }
    } else if (!directionTravel && this.x !== 0) {
      const nextCell = this.board.getCell(this.x - 1, this.y);

      if (nextCell.value === 0) {
        nextCell.setValue(nextCell, this.value);
        this.setValue(this, 0);
      }

      if (nextCell.value === this.value) {
        nextCell.setValue(nextCell, this.value + nextCell.value);
        this.setValue(this, 0);
      }
    }
  }

  public moveVertical(directionTravel: boolean) {
    if (directionTravel && this.y !== 0) {
      const nextCell = this.board.getCell(this.x, this.y - 1);

      if (nextCell.value === 0) {
        nextCell.setValue(nextCell, this.value);
        this.setValue(this, 0);
      }

      if (nextCell.value === this.value) {
        nextCell.setValue(nextCell, this.value + nextCell.value);
        this.setValue(this, 0);
      }
    } else if (!directionTravel && this.y !== 3) {
      const nextCell = this.board.getCell(this.x, this.y + 1);

      if (nextCell.value === 0) {
        nextCell.setValue(nextCell, this.value);
        this.setValue(this, 0);
      }

      if (nextCell.value === this.value) {
        nextCell.setValue(nextCell, this.value + nextCell.value);
        this.setValue(this, 0);
      }
    }
  }

  public setValue(targetCell: Cell, value: number) {
    targetCell.value = value;
  }
}
