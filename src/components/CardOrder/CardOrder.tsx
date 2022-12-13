import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { addDetails } from '../../store/slices/orderDetailsSlice';
import { getDate } from '../../utils/utils';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { TOrder } from '../../utils/types/main';

import styles from './cardorder.module.css';

interface ICardOrderProps {
  order: TOrder;
  isStatus?: boolean;
}

const CardOrder: React.FC<ICardOrderProps> = ({ order, isStatus = false }) => {
  const dispatch = useAppDispatch();
  const { ingredients } = useAppSelector((state) => state.ingredients);
  const orderDate = getDate(new Date(order.createdAt), new Date());

  const handleClick = () => {
    dispatch(addDetails(order));
  };

  const status =
    order.status === 'done'
      ? { text: 'Выполнен', color: 'var(--colors-interface-success)' }
      : order.status !== 'pending'
      ? { text: 'Отменен', color: 'var(--colors-interface-error)' }
      : { text: 'Готовится', color: 'var(--colors-interface-accent)' };

  const price: number = order.ingredients
    .map((id) => ingredients.find((ingr) => ingr._id === id))
    .reduce((acc, ingr) => {
      if (ingr !== undefined) {
        return acc + ingr.price;
      }
      return acc;
    }, 0);

  const uniqueIngredients: string[] = [];

  order.ingredients.map((id) => {
    if (!uniqueIngredients.includes(id)) {
      uniqueIngredients.push(id);
    }
  });

  return (
    <article className={styles.card} role='presentation' onMouseDown={handleClick}>
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
