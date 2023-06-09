import React from 'react';
import { Cell } from '../../model/Cell';

import styles from './CellComponent.module.scss';

interface CellComponentProps {
  cell: Cell;
}

const CellComponent: React.FC<CellComponentProps> = ({ cell }) => {
  return (
    <div className={styles.cell}>
      {!!cell.value && (
        <div
          className={
            styles['cell-body'] + ' ' + styles[`cell-body_v${cell.value}`]
          }
        >
          {cell.value}
        </div>
      )}
    </div>
  );
};

export default CellComponent;
