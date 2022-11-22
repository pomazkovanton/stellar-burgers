import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { removeDetails } from '../../store/slices/orderDetailsSlice';

import Modal from '../Modal/Modal';

import styles from './ordermodal.module.css';

const OrderModal = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { orderDetails, isShowDetails } = useSelector((store) => store.orderDetails);
  const { ingredients } = useSelector((store) => store.ingredients);

  if (!orderDetails) return null;

  if (!isShowDetails) {
    history.replace(location.pathname);
  }

  const handleCloseModalDetails = () => {
    history.goBack();
    dispatch(removeDetails());
  };

  const status =
    orderDetails.status === 'done'
      ? 'Выполнен'
      : orderDetails === 'pending'
      ? 'Готовится'
      : 'Отменен';

  const orderIngredients = orderDetails.ingredients.map(
    (id) => ingredients.filter((ingr) => ingr._id === id)[0],
  );

  const ingrTest = {};

  console.log(orderIngredients);

  return (
    <Modal
      title={`#${orderDetails.number}`}
      isActive={isShowDetails}
      closeModal={handleCloseModalDetails}
    >
      <div className={styles.container}>
        <h2>{orderDetails.name}</h2>
        <p>{status}</p>
        <h3>Состав:</h3>
        <ul>{}</ul>
      </div>
    </Modal>
  );
};

export default OrderModal;
