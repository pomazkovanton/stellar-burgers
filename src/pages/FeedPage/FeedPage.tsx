import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CurrencyIcon, FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import StatisticsBoard from '../../components/StatisticsBoard/StatisticsBoard';

import { connect, disconnect } from '../../store/slices/wsSlice';
import { ALL_ORDERS_URL } from '../../utils/constans';
import styles from './feedpage.module.css';

const FeedPage = () => {
  const { data, isConnected } = useSelector((state) => state.ws);
  const { ingredients } = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connect(ALL_ORDERS_URL));

    return () => {
      dispatch(disconnect());
    };
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {!isConnected && <h2>Загрузка данных...</h2>}
      {isConnected && data && (
        <>
          <h2 className='text text_type_main-large'>Лента заказов</h2>
          <div className={styles.mainWrapper}>
            <ul className={styles.orderList}>
              {data.orders.map((order) => {
                return (
                  <li key={order._id}>
                    <article className={styles.card}>
                      <div className={styles.header}>
                        <p className='text text_type_digits-default'>#{order.number}</p>
                        <data className='text text_type_main-default text_color_inactive'>
                          Сегодня, 16:20 i-GMT+3
                        </data>
                      </div>
                      <h3 className='text text_type_main-medium'>{order.name}</h3>
                      <div className={styles.main}>
                        <ul className={styles.ingredientsList}>
                          {order.ingredients.map((id, index) => {
                            return (
                              <li
                                key={id}
                                style={{
                                  transform: `translateX(${0 - 16 * index}px)`,
                                  zIndex: `${5 - index}`,
                                }}
                                className={styles.ingredientsItem}
                              >
                                <img
                                  className={styles.ingredientsImg}
                                  src='https://cdn.pixabay.com/photo/2016/03/10/18/44/top-view-1248955__340.jpg'
                                  alt=''
                                />
                              </li>
                            );
                          })}
                        </ul>
                        <p className={styles.price}>
                          <span className='text text_type_digits-default'>480</span>
                          <CurrencyIcon type='primary' />
                        </p>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
            <StatisticsBoard data={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default FeedPage;
