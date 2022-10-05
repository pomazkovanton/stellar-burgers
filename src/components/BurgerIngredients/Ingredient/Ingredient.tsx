import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { IngredientType } from '../../../types/Ingredient';
import { addToBurger } from '../../../store/burgerSlice';
import { addDetails } from '../../../store/ingredientDetailsSlice';

import styles from './ingredient.module.css';

interface IngredientProps {
  ingredient: IngredientType;
}

const Ingredient: React.FC<IngredientProps> = ({ ingredient }) => {
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: { ingredient },
  });
  const dispatch = useDispatch();
  const { burger } = useSelector((state) => state.burger);

  const count = burger.filter((el) => el === ingredient).length;

  const handleClick = (ingredient: IngredientType): void => {
    dispatch(addToBurger(ingredient));
    dispatch(addDetails(ingredient));
  };

  return (
    <>
      <div
        onMouseUp={() => handleClick(ingredient)}
        className={styles.card}
        role='presentation'
        draggable={true}
        ref={dragRef}
      >
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
