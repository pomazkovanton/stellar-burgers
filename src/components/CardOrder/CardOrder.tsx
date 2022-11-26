import React from 'react';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './cardorder.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addDetails } from '../../store/slices/orderDetailsSlice';
import { getDate } from '../../utils/utils';

const CardOrder = ({ order, isStatus = false }) => {
  const dispatch = useDispatch();
  const { ingredients } = useSelector((state) => state.ingredients);
  const orderDate = getDate(new Date(order.createdAt), new Date());

  const handleClick = () => {
    dispatch(addDetails(order));
  };

  const status =
    order.status === 'done'
      ? { text: 'Выполнен', color: 'var(--colors-interface-success)' }
      : order === 'pending'
      ? { text: 'Отменен', color: 'var(--colors-interface-error)' }
      : { text: 'Готовится', color: 'var(--colors-interface-accent)' };

  const price = order.ingredients
    .map((id) => ingredients.find((ingr) => ingr._id === id))
    .reduce((acc, ingr) => acc + ingr.price, 0);

  const uniqueIngredients = [];

  order.ingredients.map((id) => {
    if (!uniqueIngredients.includes(id)) {
      uniqueIngredients.push(id);
    }
  });

  return (
    <article className={styles.card} onMouseDown={handleClick}>
      <div className={styles.header}>
        <p className='text text_type_digits-default'>#{order.number}</p>
        <data className='text text_type_main-default text_color_inactive'>{orderDate}</data>
      </div>
      <div>
        <h3 className='text text_type_main-medium'>{order.name}</h3>
        {isStatus && (
          <p
            className={`text text_type_main-default ${styles.status}`}
            style={{ color: status.color }}
          >
            {status.text}
          </p>
        )}
      </div>
      <div className={styles.main}>
        <ul className={styles.ingredientsList}>
          {uniqueIngredients.map((id, index) => {
            if (index <= 5) {
              const { image } = ingredients.filter((ingr) => ingr._id === id)[0];
              return (
                <li
                  key={id}
                  style={{
                    transform: `translateX(${0 - 16 * index}px)`,
                    zIndex: `${5 - index}`,
                  }}
                  className={styles.ingredientsItem}
                >
                  <img className={styles.ingredientsImg} src={image} alt='' />
                  {order.ingredients.length > 6 && index > 4 && (
                    <div className={styles.counter}>
                      <span className={`text text_type_digits-default ${styles.counterText}`}>
                        {`+${order.ingredients.length - 6}`}
                      </span>
                    </div>
                  )}
                </li>
              );
            }
          })}
        </ul>
        <p className={styles.price}>
          <span className='text text_type_digits-default'>{price}</span>
          <CurrencyIcon type='primary' />
        </p>
      </div>
    </article>
  );
};

export default CardOrder;
