import React from 'react';

import styles from './burgeringredients.module.css';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientList from './IngredientList/IngredientList';
import { IngredientType } from '~/types/Ingredient';

interface IBurgerIngredientsProps {
  addToBurger: (ingredient: IngredientType) => void;
  ingredients: IngredientType[];
}

const BurgerIngredients: React.FC<IBurgerIngredientsProps> = ({ ingredients, addToBurger }) => {
  const [current, setCurrent] = React.useState('buns');
  return (
    <section className={styles.container}>
      <div className={styles.tabs}>
        <Tab value='buns' active={current === 'buns'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value='sauces' active={current === 'sauces'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value='fillings' active={current === 'fillings'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      {current === 'buns' ? (
        <IngredientList
          type='bun'
          title='Булки'
          ingredients={ingredients}
          addToBurger={addToBurger}
        />
      ) : null}
      {current === 'sauces' ? (
        <IngredientList
          type='sauce'
          title='Соусы'
          ingredients={ingredients}
          addToBurger={addToBurger}
        />
      ) : null}
      {current === 'fillings' ? (
        <IngredientList
          type='main'
          title='Начинки'
          ingredients={ingredients}
          addToBurger={addToBurger}
        />
      ) : null}
    </section>
  );
};

export default BurgerIngredients;
