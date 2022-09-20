import React, { useState, useContext } from 'react';
import axios from 'axios';

import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/Modal';
import OrderDetails from './OrderDetails/OrderDetails';

import styles from './burgerconstructor.module.css';
import { BurgerConstructorContext } from 'src/services/burgerConstructorContext';
import { IngredientType } from '../../types/Ingredient';

const BurgerConstructor: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [numberOrder, setNumberOrder] = useState('');
  const burger = useContext(BurgerConstructorContext);

  const fetchOrder = async (body) => {
    const res = await axios.post('https://norma.nomoreparties.space/api/orders', body);
    return res;
  };

  const calculatingPrice = (burger: IngredientType[]): number => {
    let price = 0;
    burger.map((el) => {
      el.type !== 'bun' ? (price += el.price) : (price += el.price * 2);
    });
    return price;
  };

  const handleOrderClick = async () => {
    try {
      const { data } = await fetchOrder({ ingredients: burger.map((el) => el._id) });
      setNumberOrder(data.order.number);
      setModalActive(true);
    } catch (error) {
      console.log('Error: ' + error);
    }
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
          <Button type='primary' size='medium' onClick={handleOrderClick}>
            Оформить заказ
          </Button>
        </div>
      )}
      <Modal isActive={modalActive} setActive={setModalActive}>
        <OrderDetails numberOrder={numberOrder} />
      </Modal>
    </section>
  );
};

export default BurgerConstructor;
