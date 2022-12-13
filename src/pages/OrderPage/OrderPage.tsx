import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import OrderDetails from '../../components/OrderDetails/OrderDetails';
import Loader from '../../components/Loader/Loader';

import { disconnect, connect } from '../../store/slices/wsSlice';
import { ALL_ORDERS_URL } from '../../utils/constans';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { TOrder } from '../../utils/types/main';

import styles from './orderpage.module.css';

type TParams = {
  id: string;
};

const OrderPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data, isConnected } = useAppSelector((state) => state.ws);
  const { id } = useParams<TParams>();
  let order: TOrder | null = null;

  useEffect(() => {
    dispatch(connect(ALL_ORDERS_URL));

    return () => {
      dispatch(disconnect());
    };
  }, [dispatch]);

  if (isConnected && data) order = data.orders.find((item) => item._id === id) || null;

  return (
    <div className={styles.container}>
      {!isConnected && <Loader />}
      {isConnected && data && !order && <h2>Заказ не найден.</h2>}
      {isConnected && data && order && (
        <>
          <h2 className={`text text_type_main-medium  ${styles.title}`}>{`#${order.number}`}</h2>
          <OrderDetails order={order} />
        </>
      )}
    </div>
  );
};

export default OrderPage;
