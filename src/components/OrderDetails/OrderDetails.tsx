import React from 'react';
import styles from './orderdetails.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { getDate } from 'src/utils/utils';

const OrderDetails = ({ order }) => {
  const { ingredients } = useSelector((store) => store.ingredients);

  if (!order) return null;

  const sortedOrderIngredients = [];
  const status =
    order.status === 'done'
      ? { text: 'Выполнен', color: 'var(--colors-interface-success)' }
      : order === 'pending'
      ? { text: 'Готовится', color: 'var(--colors-interface-accent)' }
      : { text: 'Отменен', color: 'var(--colors-interface-error)' };

  const orderIngredients = order.ingredients.map(
    (id) => ingredients.filter((ingr) => ingr._id === id)[0],
  );

  const orderPrice = orderIngredients.reduce((acc, ingr) => acc + ingr.price, 0);
  const orderDate = getDate(new Date(order.createdAt), new Date());

  orderIngredients.map((ingr) => {
    const isLocated =
      sortedOrderIngredients.filter((el) => el.item._id === ingr._id).length !== 0 ? true : false;

    if (!isLocated) {
      sortedOrderIngredients.push({
        item: ingr,
        count: orderIngredients.filter((item) => item._id === ingr._id).length,
      });
    }
  });
  return (
    <>
      <h2 className='text text_type_main-medium'>{order.name}</h2>
      <p className={`text text_type_main-default ${styles.status}`} style={{ color: status.color }}>
        {status.text}
      </p>
      <h3 className={'text text_type_main-medium mt-15'}>Состав:</h3>
      <ul className={styles.list}>
        {sortedOrderIngredients.map(({ item, count }) => {
          return (
            <li className={styles.item} key={item._id}>
              <img className={styles.image} src={item.image} alt={item.name} />
              <h4 className={`text text_type_main-default ${styles.name}`}>{item.name}</h4>
              <p className={styles.price}>
                <span className='text text_type_digits-default'>{`${count} x ${item.price}`}</span>
                <CurrencyIcon type='primary' />
              </p>
            </li>
          );
        })}
      </ul>
      <div className={styles.footer}>
        <p className='text text_type_main-default text_color_inactive'>{orderDate}</p>
        <p className={styles.price}>
          <span className='text text_type_digits-default'>{orderPrice}</span>
          <CurrencyIcon type='primary' />
        </p>
      </div>
    </>
  );
};

export default OrderDetails;
