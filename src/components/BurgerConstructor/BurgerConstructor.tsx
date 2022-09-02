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
import doneImg from '../../images/done.png';

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
        <h2 className='text text_type_digits-large mt-8'>034536</h2>
        <p className='text text_type_main-medium mt-8'>идентификатор заказа</p>
        <img className={styles.modal_img} src={doneImg} alt='Заказ готов!' />
        <p className='text text_type_main-default mt-15'>Ваш заказ начали готовить</p>
        <p className='text text_type_main-default text_color_inactive mt-2 mb-15'>
          Дождитесь готовности на орбитальной станции
        </p>
      </Modal>
    </section>
  );
};

export default BurgerConstructor;
