import React, { useState } from 'react';

import styles from './ingredient.module.css';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientType } from '../../../types/Ingredient';
import Modal from 'src/components/Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

interface IngredientProps {
  ingredient: IngredientType;
  burger: IngredientType[];
  addToBurger: (ingredient: IngredientType) => void;
}

const Ingredient: React.FC<IngredientProps> = ({ ingredient, addToBurger, burger }) => {
  const [modalActive, setModalActive] = useState(false);

  const handleClick = (ingredient: IngredientType): void => {
    addToBurger(ingredient);
    if (!burger.includes(ingredient)) setModalActive(true);
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
        {burger.includes(ingredient) ? <Counter count={1} size='default' /> : null}
      </div>
      <Modal title='Детали ингредиента' active={modalActive} setActive={setModalActive}>
        <IngredientDetails ingredient={ingredient} />
      </Modal>
    </>
  );
};

export default Ingredient;
