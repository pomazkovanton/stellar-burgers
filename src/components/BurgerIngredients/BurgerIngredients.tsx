import React, { useState } from 'react';

import IngredientList from './IngredientList/IngredientList';
import Tabs from './Tabs/Tabs';

import { TIngredient, TTab } from '../../utils/types/main';

import styles from './burgeringredients.module.css';

const tabsIngredients: TTab[] = [
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
  ingredients: TIngredient[];
}

const BurgerIngredients: React.FC<IBurgerIngredientsProps> = ({ ingredients }) => {
  const [current, setCurrent] = useState('bun');

  return (
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
  );
};

export default BurgerIngredients;
