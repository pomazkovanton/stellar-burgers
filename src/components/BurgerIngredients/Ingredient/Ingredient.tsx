import React, { useState } from 'react';

import styles from './ingredient.module.css';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientType } from '../../../types/Ingredient';
import Modal from 'src/components/Modal/Modal';

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
        <img className={styles.modal_img} src={ingredient.image} alt={ingredient.name} />
        <h3 className='text text_type_main-medium mt-4'>{ingredient.name}</h3>
        <ul className={styles.modal_list}>
          <li className={styles.modal_item}>
            <h4 className='text text_type_main-small text_color_inactive'>Калории,ккал</h4>
            <p className='text text_type_main-small text_color_inactive'>{ingredient.calories}</p>
          </li>
          <li className={styles.modal_item}>
            <h4 className='text text_type_main-small text_color_inactive'>Белки, г</h4>
            <p className='text text_type_main-small text_color_inactive'>{ingredient.proteins}</p>
          </li>
          <li className={styles.modal_item}>
            <h4 className='text text_type_main-small text_color_inactive'>Жиры, г</h4>
            <p className='text text_type_main-small text_color_inactive'>{ingredient.fat}</p>
          </li>
          <li className={styles.modal_item}>
            <h4 className='text text_type_main-small text_color_inactive'>Углеводы, г</h4>
            <p className='text text_type_main-small text_color_inactive'>
              {ingredient.carbohydrates}
            </p>
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default Ingredient;
