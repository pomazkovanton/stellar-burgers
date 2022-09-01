import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { IngredientType } from '~/types/Ingredient';

import styles from './burgerconstructor.module.css';

interface IBurgerConstructorProps {
  burger: IngredientType[];
}

const BurgerConstructor: React.FC<IBurgerConstructorProps> = ({ burger }) => {
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
            <p className='text text_type_digits-medium'>610</p>
            <CurrencyIcon type='primary' />
          </div>
          <Button type='primary' size='medium'>
            Оформить заказ
          </Button>
        </div>
      )}
    </section>
  );
};

export default BurgerConstructor;