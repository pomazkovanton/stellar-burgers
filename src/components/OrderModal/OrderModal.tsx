import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

import Modal from '../Modal/Modal';

import styles from './ordermodal.module.css';
import { removeDetails } from '../../store/slices/orderDetailsSlice';
import OrderDetails from '../OrderDetails/OrderDetails';

const OrderModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { orderDetails, isShowDetails } = useSelector((store) => store.orderDetails);

  if (!isShowDetails && !orderDetails) return <Redirect to={location.pathname} />;

  if (!orderDetails) return null;

  const handleCloseModalDetails = () => {
    history.goBack();
    dispatch(removeDetails());
  };

  return (
    <Modal
      title={`#${orderDetails.number}`}
      isSmallTitle
      isActive={isShowDetails}
      closeModal={handleCloseModalDetails}
    >
      <div className={styles.container}>
        <OrderDetails order={orderDetails} />
      </div>
    </Modal>
  );
};

export default OrderModal;
