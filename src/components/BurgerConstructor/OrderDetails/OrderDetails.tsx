import React from 'react';

import styles from './orderdetails.module.css';
import doneImg from '../../../images/done.png';

interface IOrderDetailsProps {
  numberOrder: number;
}

const OrderDetails: React.FC<IOrderDetailsProps> = ({ numberOrder }) => {
  return (
    <div className={styles.container}>
      <h2 className='text text_type_digits-large mt-8'>{numberOrder}</h2>
      <p className='text text_type_main-medium mt-8'>идентификатор заказа</p>
      <img className={styles.image} src={doneImg} alt='Заказ готов!' />
      <p className='text text_type_main-default mt-15'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive mt-2 mb-15'>
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
