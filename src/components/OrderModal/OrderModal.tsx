import React from 'react';
import { useHistory } from 'react-router-dom';

import Modal from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';

import { removeDetails } from '../../store/slices/orderDetailsSlice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

import styles from './ordermodal.module.css';

const OrderModal: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { orderDetails, isShowDetails } = useAppSelector((store) => store.orderDetails);

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
