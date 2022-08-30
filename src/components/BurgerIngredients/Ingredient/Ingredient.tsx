import React, { useState } from 'react';

import styles from './ingredient.module.css';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientType } from '~/types/Ingredient';

interface IngredientProps {
  ingredient: IngredientType;
}

const Ingredient: React.FC<IngredientProps> = ({ ingredient }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div onMouseDown={handleCount} className={styles.card} role='presentation'>
      <img className={styles.image} src={ingredient.image} alt={ingredient.name} />
      <div className={styles.price}>
        <span className='text text_type_digits-default'>{ingredient.price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <p className={`text text_type_main-default ${styles.name}`}>{ingredient.name}</p>
      {count !== 0 ? <Counter count={count} size='default' /> : null}
    </div>
  );
};

export default Ingredient;
