import React, { useState, useContext } from 'react';

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
import { getOrder } from 'src/utils/burger-api';

const BurgerConstructor: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [numberOrder, setNumberOrder] = useState('');
  const burger = useContext(BurgerConstructorContext);
  const [isLoadingOrder, setIsLoadingOrder] = useState(false);

  const calculatingPrice = (burger: IngredientType[]): number => {
    let price = 0;
    burger.map((el) => {
      el.type !== 'bun' ? (price += el.price) : (price += el.price * 2);
    });
    return price;
  };

  const getIdIngredients = (ingredients: IngredientType[]) => {
    const bun: IngredientType[] = ingredients.filter((ingr) => ingr.type === 'bun');
    const otherIngredients: IngredientType[] = ingredients.filter((ingr) => ingr.type !== 'bun');
    const ingredientsID: string[] =
      bun.length !== 0
        ? [bun[0]._id, ...otherIngredients.map((ingr) => ingr._id), bun[0]._id]
        : [...otherIngredients.map((ingr) => ingr._id)];

    return ingredientsID;
  };

  const handleOrderClick = async () => {
    setIsLoadingOrder(true);
    try {
      const { data } = await getOrder({ ingredients: getIdIngredients(burger) });
      setNumberOrder(data.order.number);
      setModalActive(true);
    } catch (error) {
      console.log('Error: ' + error);
    } finally {
      setIsLoadingOrder(false);
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
            {isLoadingOrder ? 'Оформление...' : 'Оформить заказ'}
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
