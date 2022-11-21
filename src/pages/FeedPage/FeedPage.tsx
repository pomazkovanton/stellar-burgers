import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

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
      {isConnected && data && ingredients && (
        <>
          <h2 className='text text_type_main-large'>Лента заказов</h2>
          <div className={styles.mainWrapper}>
            <ul className={styles.orderList}>
              {data.orders.map((order) => {
                const price = order.ingredients
                  .map((id) => ingredients.find((ingr) => ingr._id === id))
                  .reduce((acc, ingr) => acc + ingr.price, 0);

                return (
                  <li key={order._id}>
                    <article className={styles.card}>
                      <div className={styles.header}>
                        <p className='text text_type_digits-default'>#{order.number}</p>
                        <data className='text text_type_main-default text_color_inactive'>
                          {order.createdAt}
                          {/* Сегодня, 16:20 i-GMT+3 */}
                        </data>
                      </div>
                      <h3 className='text text_type_main-medium'>{order.name}</h3>
                      <div className={styles.main}>
                        <ul className={styles.ingredientsList}>
                          {order.ingredients.map((id, index) => {
                            if (index <= 5) {
                              const { image } = ingredients.filter((ingr) => ingr._id === id)[0];
                              return (
                                <li
                                  key={uuidv4()}
                                  style={{
                                    transform: `translateX(${0 - 16 * index}px)`,
                                    zIndex: `${5 - index}`,
                                  }}
                                  className={styles.ingredientsItem}
                                >
                                  <img className={styles.ingredientsImg} src={image} alt='' />
                                  {index === 5 && (
                                    <div className={styles.counter}>
                                      <span
                                        className={`text text_type_digits-default ${styles.counterText}`}
                                      >
                                        {`+${order.ingredients.length - 5}`}
                                      </span>
                                    </div>
                                  )}
                                </li>
                              );
                            }
                          })}
                        </ul>
                        <p className={styles.price}>
                          <span className='text text_type_digits-default'>{price}</span>
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
