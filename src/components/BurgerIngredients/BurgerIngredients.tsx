import React from 'react';

import styles from './burgeringredients.module.css';
import data from '../../utils/data.json';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientList from './IngredientList/IngredientList';

const BurgerIngredients: React.FC = () => {
  const [current, setCurrent] = React.useState('buns');
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex' }}>
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
      {current === 'buns' ? <IngredientList type='bun' title='Булки' ingredients={data} /> : null}
      {current === 'sauces' ? (
        <IngredientList type='sauce' title='Соусы' ingredients={data} />
      ) : null}
      {current === 'fillings' ? (
        <IngredientList type='main' title='Начинки' ingredients={data} />
      ) : null}
    </div>
  );
};

export default BurgerIngredients;
