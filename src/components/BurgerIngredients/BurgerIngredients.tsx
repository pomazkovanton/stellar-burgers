import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IngredientList from './IngredientList/IngredientList';
import Modal from '../Modal/Modal';
import IngredientDetails from '../BurgerIngredients/IngredientDetails/IngredientDetails';

import { IngredientType } from '../../types/Ingredient';
import Tabs from './Tabs/Tabs';
import { removeDetails } from '../../store/ingredientDetailsSlice';
import styles from './burgeringredients.module.css';

const tabsIngredients = [
  {
    name: 'Булки',
    value: 'bun',
  },
  {
    name: 'Соусы',
    value: 'sauce',
  },
  {
    name: 'Начинки',
    value: 'main',
  },
];

interface IBurgerIngredientsProps {
  ingredients: IngredientType[];
}

const BurgerIngredients: React.FC<IBurgerIngredientsProps> = ({ ingredients }) => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState('bun');
  const { ingredientDetails, isShowDetails } = useSelector((store) => store.ingredientDetails);

  const handleCloseModalDetails = () => {
    dispatch(removeDetails());
  };
  return (
    <>
      <section className={styles.wrapper}>
        <Tabs current={current} handleClick={setCurrent} tabs={tabsIngredients} />
        <div className={styles.container} id='containerElement'>
          {tabsIngredients.map((tab) => {
            return (
              <IngredientList
                key={tab.value}
                type={tab.value}
                title={tab.name}
                ingredients={ingredients}
              />
            );
          })}
        </div>
      </section>
      <Modal
        title='Детали ингредиента'
        isActive={isShowDetails}
        closeModal={handleCloseModalDetails}
      >
        <IngredientDetails ingredient={ingredientDetails} />
      </Modal>
    </>
  );
};

export default BurgerIngredients;
