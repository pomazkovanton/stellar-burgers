import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Board from '../../components/Board/Board';

import { connect, disconnect } from '../../store/slices/wsSlice';
import styles from './feedpage.module.css';

const FeedPage = () => {
  const { data, isConnected } = useSelector((state) => state.ws);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connect('wss://norma.nomoreparties.space/orders/all'));
    return () => {
      dispatch(disconnect());
    };
  }, []);

  return (
    <div className={styles.container}>
      {!isConnected && <h2>Загрузка данных...</h2>}
      {isConnected && data && (
        <>
          <h2 className='text text_type_main-large'>Лента заказов</h2>
          <div className={styles.mainWrapper}>
            <ul className={styles.orderList}>
              <li>
                <article className={styles.card}>
                  <div className={styles.header}>
                    <p className='text text_type_digits-default'>#034535</p>
                    <data className='text text_type_main-default text_color_inactive'>
                      Сегодня, 16:20 i-GMT+3
                    </data>
                  </div>
                  <h3 className='text text_type_main-medium'>Death Star Starship Main бургер</h3>
                  <div className={styles.main}>
                    <ul className={styles.ingredientsList}>
                      <li
                        style={{ transform: 'translateX(0)', zIndex: 5 }}
                        className={styles.ingredientsItem}
                      >
                        <img
                          className={styles.ingredientsImg}
                          src='https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955__340.jpg'
                          alt=''
                        />
                      </li>
                      <li
                        style={{ transform: 'translateX(-16px)', zIndex: 4 }}
                        className={styles.ingredientsItem}
                      >
                        <img
                          className={styles.ingredientsImg}
                          src='https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056__340.jpg'
                          alt=''
                        />
                      </li>
                      <li
                        style={{ transform: 'translateX(-32px)', zIndex: 3 }}
                        className={styles.ingredientsItem}
                      >
                        <img
                          className={styles.ingredientsImg}
                          src='https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908__340.jpg'
                          alt=''
                        />
                      </li>
                      <li
                        style={{ transform: 'translateX(-48px)', zIndex: 2 }}
                        className={styles.ingredientsItem}
                      >
                        <img
                          className={styles.ingredientsImg}
                          src='https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg'
                          alt=''
                        />
                      </li>
                    </ul>
                    <p className={styles.price}>
                      <span className='text text_type_digits-default'>480</span>
                      <CurrencyIcon type='primary' />
                    </p>
                  </div>
                </article>
              </li>
            </ul>
            <div className={styles.statistics}>
              <div className={styles.wrapper}>
                <Board title='Готовы:'>
                  <ul className={styles.boardList}>
                    <li className={`text text_type_digits-default ${styles.orderSuccess}`}>
                      034533
                    </li>
                    <li className={`text text_type_digits-default ${styles.orderSuccess}`}>
                      034533
                    </li>
                    <li className={`text text_type_digits-default ${styles.orderSuccess}`}>
                      034533
                    </li>
                    <li className={`text text_type_digits-default ${styles.orderSuccess}`}>
                      034533
                    </li>
                    <li className={`text text_type_digits-default ${styles.orderSuccess}`}>
                      034533
                    </li>
                    <li className={`text text_type_digits-default ${styles.orderSuccess}`}>
                      034533
                    </li>
                    <li className={`text text_type_digits-default ${styles.orderSuccess}`}>
                      034533
                    </li>
                  </ul>
                </Board>
                <Board title='В работе:'>
                  <ul className={styles.boardList}>
                    <li className='text text_type_digits-default'>034533</li>
                    <li className='text text_type_digits-default'>034533</li>
                    <li className='text text_type_digits-default'>034533</li>
                    <li className='text text_type_digits-default'>034533</li>
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
          </div>{' '}
        </>
      )}
    </div>
  );
};

export default FeedPage;
