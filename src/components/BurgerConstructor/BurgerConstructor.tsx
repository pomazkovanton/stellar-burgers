import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import { IngredientType } from '../../types/Ingredient';
import Modal from '../Modal/Modal';

import styles from './burgerconstructor.module.css';
import OrderDetails from './OrderDetails/OrderDetails';

interface IBurgerConstructorProps {
  burger: IngredientType[];
}

const BurgerConstructor: React.FC<IBurgerConstructorProps> = ({ burger }) => {
  const [modalActive, setModalActive] = useState(false);

  const calculatingPrice = (burger: IngredientType[]): number => {
    let price = 0;
    burger.map((el) => {
      price += el.price;
    });
    return price;
  };

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {burger.map((ingr) => {
          if (ingr.type === 'bun')
            return (
              <li key={ingr._id} className={styles.margin}>
                <ConstructorElement
                  type='top'
                  isLocked={true}
                  text={`${ingr.name} (верх)`}
                  price={ingr.price}
                  thumbnail={ingr.image}
                />
              </li>
            );
        })}
        <div className={styles.wrapper}>
          {burger.map((ingr) => {
            if (ingr.type === 'bun') return null;
            return (
              <li key={ingr._id} className={styles.ingredient}>
                <DragIcon type='primary' />
                <ConstructorElement text={ingr.name} price={ingr.price} thumbnail={ingr.image} />
              </li>
            );
          })}
        </div>
        {burger.map((ingr) => {
          if (ingr.type === 'bun')
            return (
              <li key={ingr._id} className={styles.margin}>
                <ConstructorElement
                  type='bottom'
                  isLocked={true}
                  text={`${ingr.name} (низ)`}
                  price={ingr.price}
                  thumbnail={ingr.image}
                />
              </li>
            );
        })}
      </ul>
      {burger.length !== 0 && (
        <div className={styles.order}>
          <div className={styles.price}>
            <p className='text text_type_digits-medium'>{calculatingPrice(burger)}</p>
            <CurrencyIcon type='primary' />
          </div>
          <Button type='primary' size='medium' onClick={() => setModalActive(true)}>
            Оформить заказ
          </Button>
        </div>
      )}
      <Modal active={modalActive} setActive={setModalActive}>
        <OrderDetails numberOrder='034536' />
      </Modal>
    </section>
  );
};

export default BurgerConstructor;
