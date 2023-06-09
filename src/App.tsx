import React, { useState, useCallback, useEffect } from 'react';
import { Board } from './model/Board';

import BoardComponet from './components/BoardComponent/BoardComponent';

import './scss/App.scss';

import ControlComponent from './components/ControlComponent/ControlComponent';

const App: React.FC = () => {
  const [board, setBoard] = useState(new Board());

  const initNewGames = useCallback(() => {
    const newBoard = new Board();
    newBoard.createBoard();
    setBoard(newBoard);
  }, []);

  useEffect(() => {
    initNewGames();
  }, [initNewGames]);

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  const restartGame = () => {
    const newBoard = new Board();
    newBoard.createBoard();
    setBoard(newBoard);
  };

  return (
    <div className="wrapper">
      <BoardComponet board={board} />
      <ControlComponent
        board={board}
        updateBoard={updateBoard}
        restartGame={restartGame}
      />
    </div>
  );
};

export default App;
