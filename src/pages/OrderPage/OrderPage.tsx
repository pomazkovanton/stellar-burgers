import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import OrderDetails from 'src/components/OrderDetails/OrderDetails';
import { disconnect, connect } from '../../store/slices/wsSlice';
import { ALL_ORDERS_URL } from '../../utils/constans';
import styles from './orderpage.module.css';

const OrderPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { data, isConnected } = useSelector((state) => state.ws);
  const dispatch = useDispatch();
  let order = null;

  useEffect(() => {
    dispatch(connect(ALL_ORDERS_URL));

    return () => {
      dispatch(disconnect());
    };
  }, [dispatch]);

  if (isConnected && data) order = data.orders.find((item) => item._id === id);

  return (
    <div className={styles.container}>
      {!isConnected && <h2>Загрузка...</h2>}
      {isConnected && data && (
        <>
          <h2 className={`text text_type_main-medium  ${styles.title}`}>{`#${order.number}`}</h2>
          <OrderDetails order={order} />
        </>
      )}
    </div>
  );
};

export default OrderPage;
