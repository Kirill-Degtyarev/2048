import React from 'react';
import { Board } from '../../model/Board';

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

  const back = () => {};

  return (
    <>
      <div style={{ marginBottom: 50 }} onClick={start}>
        start
      </div>
      <div onClick={restart}>restart</div>
    </>
  );
};

export default ControlComponent;
