import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import Board from '../Board/Board';

import styles from './statisticsboard.module.css';

const StatisticsBoard = ({ data }) => {
  return (
    <div className={styles.statistics}>
      <div className={styles.wrapper}>
        <Board title='Готовы:'>
          <ul className={styles.boardList}>
            {data.orders.map((order) => {
              if (order.status === 'done') {
                return (
                  <li
                    key={uuidv4()}
                    className={`text text_type_digits-default ${styles.orderSuccess}`}
                  >
                    {order.number}
                  </li>
                );
              }
            })}
          </ul>
        </Board>
        <Board title='В работе:'>
          <ul className={styles.boardList}>
            {data.orders.map((order) => {
              if (order.status !== 'done') {
                return (
                  <li key={uuidv4()} className='text text_type_digits-default'>
                    {order.number}
                  </li>
                );
              }
            })}
          </ul>
        </Board>
      </div>
      <Board title='Выполнено за все время:'>
        <p className={`text text_type_digits-large ${styles.shadows}`}>{data.total}</p>
      </Board>
      <Board title='Выполнено за сегодня:'>
        <p className={`text text_type_digits-large ${styles.shadows}`}>{data.totalToday}</p>
      </Board>
    </div>
  );
};

export default StatisticsBoard;
