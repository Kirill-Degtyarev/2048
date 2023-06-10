import React, { useState, useCallback, useEffect } from 'react';
import useKey from './hooks/useKey';

import { Board } from './model/Board';
import { Cell } from './model/Cell';

import BoardComponet from './components/BoardComponent/BoardComponent';

import './scss/App.scss';

import ControlComponent from './components/ControlComponent/ControlComponent';

const App: React.FC = () => {
  const [isMove, setIsMove] = useState<boolean>();
  const [board, setBoard] = useState<Board | null>(new Board());

  const initNewGames = useCallback(() => {
    const newBoard = new Board();
    newBoard.createBoard();
    setBoard(newBoard);
  }, []);

  useEffect(() => {
    initNewGames();
    setIsMove(false);
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
    console.log('moveTop');
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        const cell: Cell | undefined = board?.getCell(x, y);

        if (cell?.value !== 0) {
          if (cell?.y !== 0) {
            cell?.moveVertical(true);
            setIsMove(true);
          }
        }
      }
    }

    createNewNumber();
  };

  const moveBottom = () => {
    console.log('moveBottom');
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        const cell: Cell | undefined = board?.getCell(x, y);

        if (cell?.value !== 0) {
          if (cell?.y !== 3) {
            cell?.moveVertical(false);
            setIsMove(true);
          }
        }
      }
    }

    createNewNumber();
  };

  const moveRight = () => {
    console.log('moveRight');
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        const cell: Cell | undefined = board?.getCell(x, y);

        if (cell?.value !== 0) {
          if (cell?.x !== 3) {
            cell?.moveHorizontal(true);
            setIsMove(true);
          }
        }
      }
    }

    createNewNumber();
  };

  const moveLeft = () => {
    console.log('moveLeft');
    for (let y = 0; y < 4; y++) {
      for (let x = 0; x < 4; x++) {
        const cell: Cell | undefined = board?.getCell(x, y);

        if (cell?.value !== 0) {
          if (cell?.x !== 0) {
            cell?.moveHorizontal(false);
            setIsMove(true);
            console.log(isMove);
          }
        }
      }
    }

    createNewNumber();
  };

  const createNewNumber = () => {
    if (isMove) {
      console.log('ss');

      board?.newNumber();
      setIsMove(false);
      updateBoard();
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
