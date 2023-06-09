import React from 'react';
import { Board } from '../../model/Board';

import styles from './BoardComponent.module.scss';
import CellComponent from '../CellComponent/CellComponent';

interface BoardComponentProps {
  board: Board;
}

const BoardComponet: React.FC<BoardComponentProps> = ({ board }) => {
  return (
    <div className={styles.board}>
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent key={cell.id} cell={cell} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponet;
