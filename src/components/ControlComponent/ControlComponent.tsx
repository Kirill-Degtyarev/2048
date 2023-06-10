import React, { useEffect } from 'react';
import { Board } from '../../model/Board';
import useKey from '../../hooks/useKey';

interface ControlComponentProps {
  board: Board;
  updateBoard: () => void;
  restartGame: () => void;
}

const ControlComponent: React.FC<ControlComponentProps> = ({
  board,
  updateBoard,
  restartGame,
}) => {
  const start = () => {
    board.startGame();
    updateBoard();
  };

  const restart = () => {
    restartGame();
  };

  const back = () => {
    console.log('ff');
  };

  return (
    <>
      <div style={{ marginBottom: 50, cursor: 'pointer' }} onClick={start}>
        start
      </div>
      <div style={{ cursor: 'pointer' }} onClick={restart}>
        restart
      </div>
    </>
  );
};

export default ControlComponent;
