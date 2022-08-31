import React, { useState } from 'react';

import styles from './ingredient.module.css';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientType } from '~/types/Ingredient';

interface IngredientProps {
  ingredient: IngredientType;
  addToBurger: (ingredient: IngredientType) => void;
}

const Ingredient: React.FC<IngredientProps> = ({ ingredient, addToBurger }) => {
  const [count, setCount] = useState(false);

  const handleClick = (item: IngredientType) => {
    setCount(!count); // Вынести состояние в App, типа если есть в стате бургер, тогда пробрасывать тру если нет фалзе
    addToBurger(item);
  };

  return (
    <div onMouseDown={() => handleClick(ingredient)} className={styles.card} role='presentation'>
      <img className={styles.image} src={ingredient.image} alt={ingredient.name} />
      <div className={styles.price}>
        <span className='text text_type_digits-default'>{ingredient.price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <p className={`text text_type_main-default ${styles.name}`}>{ingredient.name}</p>
      {count ? <Counter count={1} size='default' /> : null}
    </div>
  );
};

export default Ingredient;
