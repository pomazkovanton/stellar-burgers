import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToBurger } from '../../../store/burgerSlice';

import styles from './ingredient.module.css';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientType } from '../../../types/Ingredient';
interface IngredientProps {
  ingredient: IngredientType;
  openModal: (ingredient: IngredientType) => void;
}

const Ingredient: React.FC<IngredientProps> = ({ ingredient, openModal }) => {
  const { burger } = useSelector((state) => state.burger);
  const count = burger.filter((el) => el === ingredient).length;
  const dispatch = useDispatch();
  const handleClick = (ingredient: IngredientType): void => {
    dispatch(addToBurger(ingredient));
    openModal(ingredient);
  };

  return (
    <>
      <div onMouseDown={() => handleClick(ingredient)} className={styles.card} role='presentation'>
        <img className={styles.image} src={ingredient.image} alt={ingredient.name} />
        <div className={styles.price}>
          <span className='text text_type_digits-default'>{ingredient.price}</span>
          <CurrencyIcon type='primary' />
        </div>
        <p className={`text text_type_main-default ${styles.name}`}>{ingredient.name}</p>
        {burger.includes(ingredient) ? <Counter count={count} size='default' /> : null}
      </div>
    </>
  );
};

export default Ingredient;
