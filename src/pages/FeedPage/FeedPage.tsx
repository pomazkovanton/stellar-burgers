import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import CardOrder from '../../components/CardOrder/CardOrder';
import StatisticsBoard from '../../components/StatisticsBoard/StatisticsBoard';

import { connect, disconnect } from '../../store/slices/wsSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { ALL_ORDERS_URL, FEED_ROUTE } from '../../utils/constans';

import styles from './feedpage.module.css';

const FeedPage = () => {
  const { data, isConnected } = useAppSelector((state) => state.ws);

  const dispatch = useAppDispatch();
  const location = useLocation();

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
                  <Link
                    key={order._id}
                    className={styles.link}
                    to={{
                      pathname: `${FEED_ROUTE}/${order._id}`,
                      state: { background: location },
                    }}
                  >
                    <li>
                      <CardOrder order={order} />
                    </li>
                  </Link>
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
