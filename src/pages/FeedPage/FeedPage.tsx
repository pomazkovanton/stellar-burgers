import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardOrder from 'src/components/CardOrder/CardOrder';

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
                return (
                  <li key={order._id}>
                    <CardOrder order={order} ingredients={ingredients} />
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
