import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import Modal from '../Modal/Modal';

import styles from './ordermodal.module.css';
import { removeDetails } from '../../store/slices/orderDetailsSlice';
import OrderDetails from '../OrderDetails/OrderDetails';

const OrderModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { orderDetails, isShowDetails } = useSelector((store) => store.orderDetails);
  const match = useRouteMatch();

  console.log(match.url);
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
