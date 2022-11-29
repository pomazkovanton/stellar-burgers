import React, { FC } from 'react';

import styles from './board.module.css';

interface IBoardProps {
  title: string;
  children: React.ReactNode;
}

const Board: FC<IBoardProps> = ({ children, title }) => {
  return (
    <div className={styles.board}>
      <h3 className='text text_type_main-medium'>{title}</h3>
      {children}
    </div>
  );
};
export default Board;
