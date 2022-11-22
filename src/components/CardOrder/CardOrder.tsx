import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './cardorder.module.css';
import { useDispatch } from 'react-redux';
import { addDetails } from '../../store/slices/orderDetailsSlice';

const CardOrder = ({ order, ingredients }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addDetails(order));
  };

  const price = order.ingredients
    .map((id) => ingredients.find((ingr) => ingr._id === id))
    .reduce((acc, ingr) => acc + ingr.price, 0);

  return (
    <article className={styles.card} onMouseDown={handleClick}>
      <div className={styles.header}>
        <p className='text text_type_digits-default'>#{order.number}</p>
        <data className='text text_type_main-default text_color_inactive'>{order.createdAt}</data>
      </div>
      <h3 className='text text_type_main-medium'>{order.name}</h3>
      <div className={styles.main}>
        <ul className={styles.ingredientsList}>
          {order.ingredients.map((id, index) => {
            if (index <= 5) {
              const { image } = ingredients.filter((ingr) => ingr._id === id)[0];
              return (
                <li
                  key={uuidv4()}
                  style={{
                    transform: `translateX(${0 - 16 * index}px)`,
                    zIndex: `${5 - index}`,
                  }}
                  className={styles.ingredientsItem}
                >
                  <img className={styles.ingredientsImg} src={image} alt='' />
                  {index === 5 && (
                    <div className={styles.counter}>
                      <span className={`text text_type_digits-default ${styles.counterText}`}>
                        {`+${order.ingredients.length - 5}`}
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
