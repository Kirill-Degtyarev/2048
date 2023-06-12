import React, { useState, useCallback, useEffect } from 'react';
import useKey from './hooks/useKey';

import { Board } from './model/Board';
import { Cell } from './model/Cell';

import BoardComponet from './components/BoardComponent/BoardComponent';

import './scss/App.scss';

import ControlComponent from './components/ControlComponent/ControlComponent';

const App: React.FC = () => {
  const [board, setBoard] = useState<Board | null>(new Board());

  const initNewGames = useCallback(() => {
    const newBoard = new Board();
    newBoard.createBoard();
    setBoard(newBoard);
  }, []);

  useEffect(() => {
    initNewGames();
  }, [initNewGames]);

  const updateBoard = () => {
    const newBoard = board?.getCopyBoard();
    if (newBoard) {
      setBoard(newBoard);
    }
  };

  const restartGame = () => {
    const newBoard = new Board();
    newBoard.createBoard();
    setBoard(newBoard);
  };

  const moveTop = () => {
    let isMove: boolean = false;

    console.log('moveTop');
    if (board?.isStartGame) {
      for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
          const cell: Cell = board.getCell(x, y);

          if (cell.canMoveCell('top')) {
            cell.moveVertical(true);
            isMove = true;
          }
        }
      }
    }

    if (isMove) {
      board?.newNumber();
      updateBoard();
      isMove = false;
    }
  };

  const moveBottom = () => {
    let isMove: boolean = false;

    console.log('moveBottom');
    if (board?.isStartGame) {
      for (let y = 3; y >= 0; y--) {
        for (let x = 3; x >= 0; x--) {
          const cell: Cell = board.getCell(x, y);

          if (cell.canMoveCell('bottom')) {
            cell.moveVertical(false);
            isMove = true;
          }
        }
      }
    }

    if (isMove) {
      board?.newNumber();
      updateBoard();
      isMove = false;
    }
  };

  const moveLeft = () => {
    let isMove: boolean = false;

    console.log('moveLeft');
    if (board?.isStartGame) {
      for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
          const cell: Cell = board.getCell(x, y);

          if (cell.canMoveCell('left')) {
            cell.moveHorizontal(false);
            isMove = true;
          }
        }
      }
    }

    if (isMove) {
      board?.newNumber();
      updateBoard();
      isMove = false;
    }
  };

  const moveRight = () => {
    let isMove: boolean = false;

    console.log('moveRight');
    if (board?.isStartGame) {
      for (let y = 3; y >= 0; y--) {
        for (let x = 3; x >= 0; x--) {
          const cell: Cell = board.getCell(x, y);

          if (cell.canMoveCell('right')) {
            console.log(cell.canMoveCell('right'));

            cell.moveHorizontal(true);
            isMove = true;
          }
        }
      }
    }

    if (isMove) {
      board?.newNumber();
      updateBoard();
      isMove = false;
    }
  };

  useKey('ArrowUp', moveTop);
  useKey('ArrowDown', moveBottom);
  useKey('ArrowRight', moveRight);
  useKey('ArrowLeft', moveLeft);

  return (
    <div className="wrapper">
      {board && (
        <React.Fragment>
          <BoardComponet board={board} updateBoard={updateBoard} />
          <ControlComponent
            board={board}
            updateBoard={updateBoard}
            restartGame={restartGame}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default App;
